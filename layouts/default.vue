<template>
	<div>
		<div>
			<b-navbar type="dark" variant="dark" toggleable>
				<b-navbar-nav class="m-auto">
					<b-nav-item to="/">Home</b-nav-item>
					<b-nav-item to="recipes">Recipes</b-nav-item>
				</b-navbar-nav>
			</b-navbar>
			<nuxt/>
		</div>
	</div>
</template>
<script>
export default {};
</script>

<style>
body {
	background: #fbfbfb;
}
</style>
