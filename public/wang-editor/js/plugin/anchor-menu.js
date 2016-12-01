// 插入ID锚点，菜单插件
(function (E, $) {

    // 用 createMenu 方法创建菜单
    E.createMenu(function (check) {
        var ANCHOR_PREFIX = 'anchor_';

        // 定义菜单id，不要和其他菜单id重复。编辑器自带的所有菜单id，可通过『参数配置-自定义菜单』一节查看
        var menuId = 'anchor';

        // check将检查菜单配置（『参数配置-自定义菜单』一节描述）中是否该菜单id，如果没有，则忽略下面的代码。
        if (!check(menuId)) {
            return;
        }

        // this 指向 editor 对象自身
        var editor = this;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,  // 编辑器对象
            id: menuId,  // 菜单id
            title: '锚点', // 菜单标题

            // 正常状态和选中装下的dom对象，样式需要自定义
            $domNormal: $('<a href="#" tabindex="-1"><i class="wangeditor-menu-img-omega"></i></a>'),
            $domSelected: $('<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-omega"></i></a>')
        });

        // 创建 dropPanel
        var $content = $('<div></div>');
        var $div1 = $('<div style="margin:20px 10px;" class="clearfix"></div>');
        var $div2 = $div1.clone().css('margin', '0 10px');
        var $anchorInput = $('<input type="text" class="block" placeholder="锚点名称，提交空值则删除锚点"/>');
        var $btnSubmit = $('<button class="right">确定</button>');
        var $btnCancel = $('<button class="right gray">取消</button>');

        $div1.append($anchorInput);
        $div2.append($btnSubmit).append($btnCancel);
        $content.append($div1).append($div2);
        
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 300
        });

        // 定义click事件
        menu.clickEvent = function (e) {
            var menu = this;
            var dropPanel = menu.dropPanel;

            if (editor.getRangeElem() === editor.txt.$txt.get(0)) {
                return;
            }

            // -------------隐藏----------------
            if (dropPanel.isShowing) {
                dropPanel.hide();
                return;
            }

            // -------------显示----------------

            // 重置 input
            $anchorInput.val('');

            // 获取anchor
            var anchor = '';
            var rangeElem = editor.getRangeElem();
            if (rangeElem) {
                if (rangeElem.id.indexOf(ANCHOR_PREFIX) !== 0) {
                    anchor = '';
                } else {
                    anchor = rangeElem.id.substring(ANCHOR_PREFIX.length);
                }
            }

            // 设置 anchor
            anchor && $anchorInput.val(anchor);

            // 显示（要设置好了所有input的值和属性之后再显示）
            dropPanel.show();
        };

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            if (rangeElem.id && rangeElem !== editor.txt.$txt.get(0)) {
                return true;
            }
            return false;
        };

        // 『取消』 按钮
        $btnCancel.click(function (e) {
            e.preventDefault();
            menu.dropPanel.hide();
        });

        // 『确定』按钮
        $btnSubmit.click(function (e) {
            e.preventDefault();
            var rangeElem = editor.getRangeElem();

            var commandFn, callback;
            var $txt = editor.txt.$txt;

            // 获取数据
            var anchor = $.trim($anchorInput.val());

            if (anchor) {
                // 设置锚点

                commandFn = function () {
                    $(rangeElem).attr('id', ANCHOR_PREFIX + anchor);
                };
                callback = function () {
                    var editor = this;
                    editor.restoreSelectionByElem(rangeElem);
                };
                // 执行命令
                editor.customCommand(e, commandFn, callback);
            } else {
                // 输入的锚点为空，删除锚点

                commandFn = function () {
                    $(rangeElem).removeAttr('id');
                };
                callback = function () {
                    var editor = this;
                    editor.restoreSelectionByElem(rangeElem);
                };
                // 执行命令
                editor.customCommand(e, commandFn, callback);
            }

        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

})(window.wangEditor, window.jQuery);