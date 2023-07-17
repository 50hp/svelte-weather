<script>

    export let weather;
    export let index;
</script>

<div class="card">
    <section >
        <h4>{JSON.stringify(weather.current_weather)}</h4>
    </section>
</div>
