import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/shift-away-subtle.css';
import 'tippy.js/themes/light.css';

export default {
    install(app: any) {
        app.directive('tooltip', {
            mounted(el: any, binding: any) {
                let trigger = binding.value.trigger;
                if (trigger == 'hover') {
                    trigger = 'mouseenter';
                }
                tippy(el, {
                    trigger: trigger || 'mouseenter',
                    content: binding.value.content,
                    animation: 'shift-away-subtle',
                    interactive: true,
                    appendTo: 'parent',
                    placement: binding.value.placement,
                    allowHTML: binding.value.allowHTML,
                    onShow(instance) {
                        const node = document.getElementsByTagName('html')[0];
                        if (node.classList.contains('lew-dark')) {
                            instance.popper.children[0].setAttribute(
                                'data-theme',
                                'dark',
                            );
                        } else {
                            instance.popper.children[0].setAttribute(
                                'data-theme',
                                'light',
                            );
                        }
                    },
                });
            },
        });
    },
};