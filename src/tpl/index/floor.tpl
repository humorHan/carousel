{{each floors}}
    <div class="floor mt40">
        <div class="floor-title mb10 font18">
            {{$index + 1}}F {{$value.title}}
        </div>
        {{if $value.style == 1}}
            {{include './floorStyle1' $value}}         <!-- 一排方块 -->
        {{else if $value.style == 2}}
            {{include './floorStyle2' $value}}         <!-- 一排方块 二三位置为长方形轮播 -->
        {{else if $value.style == 3}}                  <!-- 两排,第一列竖直静态长方形,其余是方块 -->
            {{include './floorStyle3' $value}}
        {{else}}                                       <!-- 两排,第一列竖直静态长方形,第一行二三位置长方形轮播 -->
            {{include './floorStyle4' $value}}
        {{/if}}
    </div>
{{/each}}