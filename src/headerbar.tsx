import type { Component } from 'solid-js';

function Headerbar() {
    return (
        <div class="h-12 bg-neutral-700 p-2  flex flex-row justify-between items-center">
            <div class="flex flex-row justify-evenly">
                <h2>MVPuccino</h2>
                <a target="content">3D art</a>
            </div>
            <a href="https://github.com/MVPuccino/ioSources" target="_blank">
                <img src="src/assets/gh.png" class="h-8 w-8"/>
            </a>
        </div>
    )
}

export default Headerbar