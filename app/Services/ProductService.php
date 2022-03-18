<?php

namespace App\Services;

use Carbon\Carbon;
use App\Models\Product;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Spatie\QueryBuilder\AllowedSort;

class ProductService
{
    public function listAll()
    {
        $query = $this->_getAllProductsQuery();

        // Filtering
        $queryBuilder = QueryBuilder::for($query)
            ->allowedFilters([
                AllowedFilter::callback('name', function (Builder $query, $value) {
                    $query->where(function ($query) use ($value) {
                        $query->where('products.name', 'LIKE', "%$value%");
                    });
                }),
            ]);

        // Sorting
        $queryBuilder->defaultSort('products.name')->allowedSorts([
            'name'
        ]);
        //dd($queryBuilder->toSql());
        return $queryBuilder->paginate(20)->withQueryString();
    }

    public function add(array $validated)
    {
        $product = new Product();
        $product->fill($validated)->save();
    }

    public function update(int $id, array $validated)
    {
        $product = Product::find($id);
        if (!$product) {
            throw new ModelNotFoundException('Product not found. ');
        }
        $product->fill($validated)->save();
    }

    public function delete(int $id)
    {
        Product::destroy($id);
    }

    private function _getAllProductsQuery()
    {
        $query = Product::select('products.id', 'products.name');

        return $query;
    }
}
