{{each}}
    {{if $index == 0}}
        <li class="floatLeft white-bg">
            <img src="{{$value.url}}"/>
        </li>
    {{else}}
        <li class="floatLeft white-bg ml10">
            <img src="{{$value.url}}"/>
        </li>
    {{/if}}
{{/each}}