<template>
  <div class="home-container">
    <h1 class="portfolio-title">PORTFOLIO</h1>
    <div class="content-wrapper">
      <img src="/images/L1.jpg" class="profile-img" alt="Portfolio Image" />
      <div class="button-group">
        <router-link to="/profile" class="btn btn-pink btn-custom pulse-shadow">Go to Profile</router-link>
        <router-link to="/courses" class="btn btn-dark btn-custom float-shadow">Go to Courses</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
/* คอนเทนเนอร์หลัก */
.home-container {
  background-color: #000000;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

/* หัวข้อ */
.portfolio-title {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 75px;
  color: white;
  text-transform: uppercase;
  margin-bottom: 25px;
  text-shadow: 3px 3px 5px #ff66b2;
}

/* คอนเทนเนอร์สำหรับรูปภาพและปุ่ม */
.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 10px solid rgb(75, 72, 72);
  border-radius: 50px;
  padding: 30px;
  width: 65%;
  max-width: 900px;
  box-shadow: 8px 8px 15px rgba(255, 102, 178, 0.7), 10px 10px 20px rgba(0, 0, 0, 0.6);
}

/* รูปภาพโปรไฟล์ */
.profile-img {
  width: 350px;
  height: 350px;
  border-radius: 10%;
  border: 4px solid black;
  object-fit: cover;
  margin-right: 30px;
  box-shadow: 5px 5px 10px rgba(255, 102, 178, 0.8), 8px 8px 15px rgba(0, 0, 0, 0.6);
}

/* คอนเทนเนอร์สำหรับปุ่ม */
.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* ปุ่ม Profile (ชมพู) */
.btn-pink {
  background-color: #ff66b2;
  color: white;
  border-radius: 10px;
}

/* ปุ่ม Courses (ดำ) */
.btn-dark {
  background-color: #333333;
  color: white;
  border-radius: 10px;
}

/* ขนาดปุ่ม */
.btn-custom {
  font-size: 1.3rem;
  padding: 15px 25px;
  min-width: 200px;
  transition: all 0.3s ease-in-out;
  text-align: center;
  border: none;
}

/* เอฟเฟกต์ Hover */
.btn-custom:hover {
  transform: translateY(-3px);
  opacity: 0.9;
}

/* ===== แรเงากระพริบ (Pulse Shadow Effect) ===== */
@keyframes pulse {
  0% {
    box-shadow: 0 0 10px rgba(255, 102, 178, 0.8), 0 0 15px rgba(0, 0, 0, 0.6);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 102, 178, 0.9), 0 0 25px rgba(0, 0, 0, 0.7);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 102, 178, 0.8), 0 0 15px rgba(0, 0, 0, 0.6);
  }
}

.pulse-shadow {
  animation: pulse 1.5s infinite alternate;
}

/* ===== แรเงาขยับขึ้นลง (Floating Shadow Effect) ===== */
@keyframes floatingShadow {
  0% {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7), -2px -2px 10px rgba(255, 102, 178, 0.8);
  }
  50% {
    box-shadow: -2px -2px 10px rgba(0, 0, 0, 0.7), 2px 2px 10px rgba(255, 102, 178, 0.8);
  }
  100% {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7), -2px -2px 10px rgba(255, 102, 178, 0.8);
  }
}

.float-shadow {
  animation: floatingShadow 1.5s infinite alternate ease-in-out;
}
</style>
