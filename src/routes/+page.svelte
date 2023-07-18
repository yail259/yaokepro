<script lang="ts">
    export let data;
    const postPaths = data.postPaths;

    let mc: HTMLDivElement;

    function handleMCMove(event: any) {
        if (event.code === "ArrowDown") {
            mc.style.top = `${mc.offsetTop - 50 + 20}px`;
        } else if (event.code === "ArrowUp") {
            // console.log(`${mc.offsetTop - 10}px`);

            mc.style.top = `${mc.offsetTop - 70}px`;
            // console.log(mc.offsetTop);
        } else if (event.code === "ArrowLeft") {
            mc.style.left = `${mc.offsetLeft - 10}px`;
        } else if (event.code === "ArrowRight") {
            mc.style.left = `${mc.offsetLeft + 10}px`;
        }

        console.log(event);
    }

</script>

{#each postPaths as path}
    <a href="/blog/{path}">{path}</a>
    <br>
{/each}

<svelte:window on:keydown={handleMCMove} />

<div class="balls" id="blue" bind:this={mc}>
</div>

<style>
    .balls {
        border-radius: 50%;
        position: fixed;
        width: 50px;
        height: 50px;
        margin-top: 50px;
    }

    #blue {
        background-color: blue;
        left: 0;
    }
</style>




