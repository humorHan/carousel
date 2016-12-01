<ul class="floor-content clearFix">
    {{each items}}
        {{if $index === 0}}
            {{if $value.type == 'HORIZONTAL_CAROUSEL'}}
                <li class="floatLeft w480 item box-shadow">
                    <div class="floor-carousel-flag carousel{{id}}" data-carousel-class="carousel{{id}}"></div>
                </li>
            {{else}}
                <li class="floatLeft box-shadow">
                    <a href="{{$value.data['0'].url}}">
                        <img src="{{$value.data['0'].image_key | getUrl}}" />
                    </a>
                </li>
            {{/if}}
        {{else}}
            {{if $value.type == 'HORIZONTAL_CAROUSEL'}}
                <li class="floatLeft box-shadow w480 borderL item">
                    <div class="floor-carousel-flag carousel{{id}}" data-carousel-class="carousel{{id}}"></div>
                </li>
            {{else}}
                <li class="floatLeft box-shadow borderL">
                    <a href="{{$value.data['0'].url}}">
                        <img src="{{$value.data['0'].image_key | getUrl}}" />
                    </a>
                </li>
            {{/if}}
        {{/if}}
    {{/each}}
</ul>