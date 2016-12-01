<ul class="floor-content clearFix">
    {{each items}}
        {{if $index == 0}}
            <li class="floatLeft box-shadow">
                <a href="{{$value.data['0'].url}}">
                    <img src="{{$value.data['0'].image_key | getUrl}}" />
                </a>
            </li>
        {{else}}
            <li class="floatLeft box-shadow borderL">
                <a href="{{$value.data['0'].url}}">
                    <img src="{{$value.data['0'].image_key | getUrl}}" />
                </a>
            </li>
        {{/if}}
    {{/each}}
</ul>