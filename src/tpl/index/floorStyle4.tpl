<div class="floor-content floor-style3 clearFix">
    <div class="floatLeft box-shadow">
        <a href="{{items['0'].data['0'].url}}">
            <img style="width: 240px; height: 482px;" src="{{items['0'].data['0'].image_key | getUrl}}" />
        </a>
    </div>
    <ul class="floatLeft item" style="width: 960px;">
        {{each items}}
            {{if $index > 0 && $index <= 3}}
                {{if $index == 1}}
                    <li class="floatLeft borderL border-box box-shadow" style="width: 480px; height: 240px;">
                        <div class="floor-carousel-flag carousel{{id}}" data-carousel-class="carousel{{id}}" style="width: 479px; height: 240px;"></div>
                    </li>
                {{else}}
                    <li class="floatLeft borderL border-box box-shadow">
                        <a href="{{$value.data['0'].url}}">
                            <img src="{{$value.data['0'].image_key | getUrl}}" />
                        </a>
                    </li>
                {{/if}}
            {{else if $index > 0 && $index > 3}}
                <li class="floatLeft borderL border-box borderT box-shadow">
                    <a href="{{$value.data['0'].url}}">
                        <img src="{{$value.data['0'].image_key | getUrl}}" />
                    </a>
                </li>
            {{/if}}
        {{/each}}
    </ul>
</div>