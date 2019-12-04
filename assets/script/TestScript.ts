// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TestScript extends cc.Component {


    @property(cc.Prefab)
    label_prefab: cc.Prefab = null;

    
    text: string[] = [
        "陈奶奶的猫走丢啦。",
        "老奶奶的儿女都不在镇子上。",
        "老人家平时孤孤单单的。",
        "就只有猫陪着。",
        "老人家失魂落魄的。",
        "这个委托怎么能不接。",
    ];

    _current_node: cc.Node = null;

    _current_index: number = 0

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        // setInterval(() => {
        //     if (this._current_node) {
        //         this._current_node.destroy();
        //     }
        //     let node = cc.instantiate(this.label_prefab);
        //     this._current_node = node;
        //     let node_label = node.getComponent(cc.Label);
        //     node_label.string = this.text[this._current_index];
        //     this.node.addChild(node);
        //     this._current_index +=1;
        //     if (this._current_index === this.text.length) {
        //         this._current_index = 0;
        //     }
        // }, 2 * 1000)
    }

    // update (dt) {}
}
