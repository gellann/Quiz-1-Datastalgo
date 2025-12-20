from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [ 
        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',
        '/api/products/<id>/reviews/',
        '/api/products/top/',
        '/api/products/<id>/',
        '/api/products/delete/<id>/', 
        '/api/products/<update>/<id>',
    ]
    
    
    return JsonResponse(routes, safe=False)

@api_view(['GET'])
def getProducts(request):
    # returns all products
    return JsonResponse(products, safe=False)

@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
            if i['_id'] == pk:
                product = i
                break
    if product_item:
        return JsonResponse(product_item, safe=False)
    else:
        return JsonResponse({"detail": "Product not found"}, status=404)
