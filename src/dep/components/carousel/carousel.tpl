<div class="carousel-wrapper">
    <ul class="carousel-img">
        {{each data}}
            <li>
                <a class="block" href="{{$value.url}}">
                    <img src="{{$value.image_key | getUrl}}">
                </a>
            </li>
        {{/each}}
    </ul>
    {{if hasPreNext}}
        <div class="previous-next">
            <span class="previous">
                <i class="middle"></i>
            </span>
            <span class="next">
                <i class="middle"></i>
            </span>
        </div>
    {{/if}}
    {{if hasNav}}
        <ul class="carousel-nav">
            {{each data}}
                {{if $index == 0}}
                    <li class="active"></li>
                {{else}}
                    <li></li>
                {{/if}}
            {{/each}}
        </ul>
    {{/if}}
</div>