<template>
<div >
	<v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="$store.state.drawer" enable-resize-watcher width="500" app class="blue lighten-5">
			<v-list class="container">
				<v-form ref="form" v-model="valid" lazy-validation>
					<h1>Add a new recipe!</h1>
					<v-text-field v-model="title" label="Title" required></v-text-field>
					<v-text-field v-model="subtitle"  label="Subtitle" required></v-text-field>
					<v-text-field v-model="picture"  label="Link to the picture"></v-text-field>
					<v-checkbox v-model="checkbox" label="Use the default picture?" checked="checkbox"></v-checkbox>
					<v-btn :disabled="!valid" @click="submit">
						submit
					</v-btn>
					<v-btn @click="clear">clear</v-btn>
					<v-btn @click="$store.commit('change')">hide</v-btn>
				</v-form>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>
<script>
  import axios from 'axios'

  export default {
	  data: () => ({
		  valid: false,
		  miniVariant: false,
		  clipped: false,
	  title: '',
      subtitle: '',
	  picture: 'https://www.clker.com/cliparts/n/T/5/z/f/Y/image-missing-md.png',
	  checkbox: true,
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
			if(this.checkbox){
				this.picture = 'http://www.clker.com/cliparts/n/T/5/z/f/Y/image-missing-md.png';
			}
			else if(!this.checkbox) {
				if(this.picture === '') {
					this.picture = 'http://www.clker.com/cliparts/n/T/5/z/f/Y/image-missing-md.png';
				}
			}
          axios.post('http://localhost:3001/recipes/submit', {
            title: this.title,
            subtitle: this.subtitle,
			checkbox: this.checkbox,
			picture: this.picture,
		  })
		  .then((result) => {
			  this.$emit('submit', result)
		  }).catch((err) => {
			  console.log('ERROR: ', err);

		  });
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>
<style scoped>
	.container {
		display: flex;
		height:100%;
		justify-content: center;
		align-items: center;
	}
</style>
