<template>
    <div>
        <div class="demo">
            <lew-flex direction="column" x="start" y="start">
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
            </lew-flex>
            <lew-flex direction="column" x="center" y="start">
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
            </lew-flex>
            <lew-flex direction="column" x="end" y="start">
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
            </lew-flex>
        </div>
        <div class="demo">
            <lew-flex direction="column" x="start" y="center">
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
            </lew-flex>
            <lew-flex direction="column" x="center" y="center">
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
            </lew-flex>
            <lew-flex direction="column" x="end" y="center">
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
            </lew-flex>
        </div>
        <div class="demo">
            <lew-flex direction="column" x="start" y="end">
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
            </lew-flex>
            <lew-flex direction="column" x="center" y="end">
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
            </lew-flex>
            <lew-flex direction="column" x="end" y="end">
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
                <div class="box"><div></div></div>
            </lew-flex>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.demo {
    display: flex;
    justify-content: center;
    align-items: center;
}
.lew-flex {
    border: 1px var(--lew-bgcolor-2) solid;
    border-radius: var(--lew-form-border-radius);
    background-color: var(--lew-bgcolor-1);
    margin-bottom: 20px;
    width: 200px;
    height: 200px;
    padding: 5px;
    box-sizing: border-box;
    margin: 10px;
    .box {
        box-sizing: border-box;
        > div {
            display: inline-block;
            padding: 10px;
            font-size: 14px;
            border-radius: var(--lew-form-border-radius);
            background-color: var(--lew-primary-color);
        }
    }
}
</style>
