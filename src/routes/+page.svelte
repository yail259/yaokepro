<script lang="ts">
    export let data;
    const postPaths = data.postPaths;

</script>

{#each postPaths as path}
    <a href="/blog/{path}">{path}</a>
    <br>
{/each}

A Software Engineering and Psychology student at USYD.

Interested in AI, Web Development, Education, Abnormal Psychology and Philosophy.






