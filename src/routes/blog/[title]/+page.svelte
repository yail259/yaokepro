<script>
    export let data;
    const content = data.content;

    console.log(content);
</script>

<div>
    {@html content?.code}
</div>