from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .models import Order, OrderItem
from cart.models import Cart
from products.models import Product

@login_required
def checkout_view(request):
    cart, created = Cart.objects.get_or_create(user=request.user)
    cart_items = cart.items.all()
    
    if not cart_items:
        return redirect('cart_detail')
        
    total_price = cart.get_total_price()
    
    if request.method == 'POST':
        name = request.POST.get('name', '').strip()
        address = request.POST.get('address', '').strip()
        phone = request.POST.get('phone', '').strip()
        
        if name and address and phone:
            # Create Order
            order = Order.objects.create(
                user=request.user,
                total_price=total_price,
                billing_name=name,
                shipping_address=address,
                phone=phone
            )
            
            # Create OrderItems and reduce product stock
            for item in cart_items:
                OrderItem.objects.create(
                    order=order,
                    product=item.product,
                    quantity=item.quantity,
                    price=item.product.price
                )
                # Deduct stock
                if item.product.stock >= item.quantity:
                    item.product.stock -= item.quantity
                else:
                    item.product.stock = 0
                item.product.save()
                
            # Clear Cart
            cart_items.delete()
            
            return redirect('order_history')
            
    return render(request, 'orders/checkout.html', {
        'cart_items': cart_items,
        'total_price': total_price
    })

@login_required
def order_history_view(request):
    orders = request.user.orders.all().order_by('-date')
    return render(request, 'orders/history.html', {'orders': orders})
