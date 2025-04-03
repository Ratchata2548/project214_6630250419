<template>
  <div class="card p-3 custom-card">
    <!-- รูปโปรไฟล์ -->
    <img :src="student.image" alt="Profile" class="img-fluid rounded-circle profile-img">
    
    <!-- ชื่อของนิสิต -->
    <h2 class="text-center">{{ student.name }}</h2>
    
    <!-- ข้อมูลนิสิต -->
    <p class="text-muted">รหัสนิสิต: {{ student.id }}</p>
    <p class="text-muted">สาขา: {{ student.major }}</p>
    <p class="text-muted">โรงเรียนเดิม: {{ student.previousSchool }}</p>
    
    
  </div>
</template>

<script>
export default {
  props: ['student']
};
</script>

<style scoped>
/* กำหนดสไตล์ให้กับกรอบ */
.custom-card {
  max-width: 5000px;
  margin: auto;
  background-color: #333; /* สีพื้นหลังเทาดำ */
  color: #f0f0f0; /* ตัวหนังสือสีขาวอมเทา */
  border-radius: 10px; /* มุมกรอบโค้ง */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* เงารอบกรอบ */
  text-align: center;
  padding: 20px;
}

/* รูปโปรไฟล์ */
.profile-img {
  width: 150px;
  height: 150px;
  border: 5px solid #434343; /* กรอบขาวรอบรูป */
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.5); /* เงารอบรูป */
  margin-bottom: 20px;
}

/* ปรับแต่งข้อความของหัวข้อ */
h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  color: #ffffff; /* ทำให้ชื่อสีขาว */
}

/* ปรับแต่งข้อความของข้อมูล */
p {
  font-size: 1.1rem;
  margin: 5px 0;
  color: #dcdcdc; /* ตัวหนังสือสีเทาอ่อน */
}

/* ปุ่ม */
.btn-custom {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}

.btn-custom:hover {
  background-color: #555; /* สีพื้นหลังเมื่อ hover */
  transform: translateY(-2px); /* ให้ปุ่มดูนูนขึ้น */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* เพิ่มเงาเมื่อ hover */
}
</style>
