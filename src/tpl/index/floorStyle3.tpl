<div class="floor-content floor-style3 clearFix">
    <div class="floatLeft box-shadow">
        <a href="{{items['0'].data['0'].url}}">
            <img style="width: 240px; height: 482px;" src="{{items['0'].data['0'].image_key | getUrl}}" />
        </a>
    </div>
    <ul class="floatLeft" style="width: 960px;">
        {{each items}}
            {{if $index > 0 && $index <= 4}}
                <li class="floatLeft borderL border-box borderB box-shadow">
                    <a href="{{$value.data['0'].url}}">
                        <img src="{{$value.data['0'].image_key | getUrl}}" />
                    </a>
                </li>
            {{else if $index > 0 && $index > 4}}
                <li class="floatLeft borderL border-box box-shadow">
                    <a href="{{$value.data['0'].url}}">
                        <img src="{{$value.data['0'].image_key | getUrl}}" />
                    </a>
                </li>
            {{/if}}
        {{/each}}
    </ul>
</div>