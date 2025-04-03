<template>
  <div class="container mt-5">
    <div class="card profile-card p-5">
      <h2 class="text-center">Profile</h2>
      <div class="d-flex align-items-center justify-content-between">
        <!-- ข้อมูลส่วนตัว -->
        <div class="profile-info">
          <h3 class="personal">Personal Information</h3>
          <hr>
          <p><strong>Name:</strong> {{ profile.name }}</p>
          <p><strong>Student ID:</strong> {{ profile.id }}</p>
          <p><strong>Major:</strong> {{ profile.major }}</p>
          <hr>
          <h3>Education</h3>
          <p><strong>School:</strong> {{ profile.school }}</p>
        </div>

        <!-- รูปภาพและคอนแทค -->
        <div class="profile-image-container">
          <img :src="profile.image" class="shadow-lg profile-img" alt="Profile Picture" />
          <div class="social-links">
            <a href="https://www.instagram.com/le_rxtchxtx/?next=%2F" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram Icon">
            </a>
            <a href="https://www.tiktok.com/@274692057za?_t=ZS-8vESKyHcKxD&_r=1" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" alt="TikTok Icon">
            </a>
            <a href="https://www.facebook.com/share/12GsrhHnppw/" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="Facebook Icon">
            </a>
          </div>
        </div>
      </div>

      <!-- ปุ่ม Edit -->
      <button class="btn btn-edit mt-3" @click="editMode=true">Edit</button>

      <!-- ปุ่ม Back & Next -->
      <div class="mt-3">
        <router-link to="/" class="btn btn-light me-2">
          <img src="file:///C:/Users/guidt/Downloads/arrow_back_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="Back Icon">
        </router-link>
        <router-link to="/courses" class="btn btn-light">
          <img src="file:///C:/Users/guidt/Downloads/arrow_forward_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg" alt="Next Icon">
        </router-link>
      </div>

      <!-- Form แก้ไขข้อมูล -->
      <div v-if="editMode" class="mt-4">
        <h3 class="text-center">Edit Profile</h3>
        <form @submit.prevent="saveProfile">
          <input v-model="profile.name" class="form-control mb-2" placeholder="Name" required />
          <input v-model="profile.id" class="form-control mb-2" placeholder="Student ID" required />
          <input v-model="profile.major" class="form-control mb-2" placeholder="Major" required />
          <input v-model="profile.school" class="form-control mb-2" placeholder="Previous School" required />
          <button type="submit" class="btn btn-save mt-3">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        id: "6630250575",
        name: "Dechathon Thongthipyarat",
        major: "Computer Science",
        school: "Maleevid",
        image: "/images/s1.jpg",
      },
      editMode: false,
    };
  },
  methods: {
    async saveProfile() {
      try {
        await fetch("http://localhost:3000/profile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.profile),
        });

        this.editMode = false;
      } catch (error) {
        console.error("Error saving profile:", error);
      }
    },
  },
  async mounted() {
    try {
      const response = await fetch("http://localhost:3000/profile");
      const data = await response.json();
      if (data) this.profile = data;
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  },
};
</script>

<style scoped>
/* ฟอนต์ */
* {
  font-family: "Urbanist", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
}

/* กรอบการ์ด */
.profile-card {
  background: linear-gradient(145deg, #1a1a1a, #292929);
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(255, 20, 147, 0.4);
  max-width: 1000px;
  margin: auto;
  padding: 50px;
}

/* หัวข้อ */
h2 {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: #ff66b2;
}

/* Personal Information */
.personal {
  font-size: 1.5rem;
  font-weight: bold;
}

/* ข้อมูลทางซ้าย */
.profile-info {
  flex: 1;
  padding: 20px;
}

/* รูปโปรไฟล์ */
.profile-image-container {
  text-align: center;
}

.profile-img {
  width: 200px;
  height: 300px;
  border: 6px solid #ff66b2;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 8px 20px rgba(255, 20, 147, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-img:hover {
  transform: scale(1.1);
  box-shadow: 0 12px 30px rgba(255, 20, 147, 0.8);
}

/* Social Media Icons */
.social-links {
  margin-top: 15px;
}

.social-links a {
  display: inline-block;
  margin: 0 8px;
}

.social-links img {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease-in-out;
}

.social-links a:hover img {
  transform: scale(1.2);
}

/* ปุ่ม */
.btn {
  font-size: 1.1rem;
  padding: 13px;
  border-radius: 5px;
}

/* ปุ่ม Edit */
.btn-edit {
  background-color: #ff66b2;
  color: #fff;
  border: none;
  transition: all 0.3s ease;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.btn-edit:hover {
  background-color: #ff3385;
  box-shadow: 0 5px 15px rgba(255, 20, 147, 0.5);
}

/* ปุ่ม Save */
.btn-save {
  background-color: #ff66b2;
  color: white;
  border: none;
  transition: all 0.3s ease;
}

.btn-save:hover {
  background-color: #ff3385;
  box-shadow: 0 5px 15px rgba(255, 20, 147, 0.5);
}

/* ฟอร์ม */
form input {
  font-size: 1rem;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 1px solid #ff66b2;
}
</style>
