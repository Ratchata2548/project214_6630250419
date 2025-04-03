<template>
    <div class="container mt-5">
      <h2>{{ courseId ? 'Edit Course' : 'Add New Course' }}</h2>
      <form @submit.prevent="saveCourse">
        <input v-model="course.code" class="form-control mb-2" placeholder="Course Code" required />
        <input v-model="course.name" class="form-control mb-2" placeholder="Course Name" required />
        <input v-model="course.credits" type="number" class="form-control mb-2" placeholder="Credits" required />
        <input v-model="course.grade" class="form-control mb-2" placeholder="Grade" required />
        <button type="submit" class="btn btn-success">{{ courseId ? 'Save Changes' : 'Add Course' }}</button>
        
      </form>
      <router-link to="/courses" class="btn btn-secondary mt-3">Back to Course List</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        courseId: null,
        course: {
          code: '',
          name: '',
          credits: '',
          grade: ''
        }
      };
    },
    async mounted() {
      this.courseId = this.$route.params.id;
      if (this.courseId) {
        const response = await fetch(`http://localhost:3000/courses/${this.courseId}`);
        this.course = await response.json();
      }
    },
    methods: {
      async saveCourse() {
        if (this.courseId) {
          // Update existing course
          await fetch(`http://localhost:3000/courses/${this.courseId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.course)
          });
        } else {
          // Add new course
          await fetch('http://localhost:3000/courses', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.course)
          });
        }
        this.$router.push('/courses');
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    font-family: 'Link', sans-serif;
  }
  </style>
  