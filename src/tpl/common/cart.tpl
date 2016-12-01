<div class="products">
    <span class="font12 block mb15">最新加入的商品:</span>
    <ul>
        {{each items}}
            <li class="mb20 clearFix">
                <a class="floatLeft" href="/cart?id={{$value.product_id}}#{{$value.brief}}">
                    <img src="{{$value.image_key | getUrl}}" width="38" height="38"/>
                </a>
                <a class="floatLeft ml10" href="/cart?id={{$value.product_id}}#{{$value.brief}}">
                    <div class="product-title font14 bold">{{$value.title}}</div>
                    <div class="product-brief font12 ellipsis w160">{{$value.brief}}</div>
                </a>
                <div class="floatRight">
                    <div class="red bold font16">
                        {{if $value.is_custom}}
                            待定
                        {{else}}
                            {{$value.price | processPrice}} x {{$value.quantity}}
                        {{/if}}
                    </div>
                    <div class="delete-product font12 pointer floatRight" data-product-id="{{$value.id}}">删除</div>
                </div>
            </li>
        {{/each}}
    </ul>
    <div class="see-cart floatRight font14 pointer">查看购物车 ></div>
</div>