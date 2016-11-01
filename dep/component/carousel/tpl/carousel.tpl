<div class="carousel-wrapper">
    <ul class="carousel-img">
        {{each}}
            <li>
                <a href="javascript:;">
                    <img src="/test/bundle/img/{{$value}}.jpeg">
                </a>
            </li>
        {{/each}}
    </ul>
    <div class="previous-next">
        <span class="previous">
            <
        </span>
        <span class="next">
            >
        </span>
    </div>
    <ul class="carousel-nav">
        {{each}}
            {{if $index == 0}}
                <li class="active">{{$value}}</li>
            {{else}}
                <li>{{$value}}</li>
            {{/if}}
        {{/each}}
    </ul>
</div>