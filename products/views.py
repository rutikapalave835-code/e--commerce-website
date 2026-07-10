from django.shortcuts import render, get_object_or_404
from .models import Category, Product

def home_view(request):
    query = request.GET.get('q', '')
    category_id = request.GET.get('category', '')
    
    products = Product.objects.all()
    categories = Category.objects.all()
    
    if query:
        products = products.filter(name__icontains=query)
    if category_id and category_id != 'all':
        products = products.filter(category_id=category_id)
        
    return render(request, 'products/home.html', {
        'products': products,
        'categories': categories,
        'query': query,
        'selected_category': category_id,
    })

def product_detail_view(request, pk):
    product = get_object_or_404(Product, pk=pk)
    return render(request, 'products/detail.html', {'product': product})
