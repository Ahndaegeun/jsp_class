<template>
  <div class="todo-container">
    <div class="head-wrap">
      <h3 class="title">ToDo</h3>
      <button type="button">+</button>
    </div>
    <div class="middle-line"></div>
    <ul class="to-do-list-wrap">
      <li>
        <span class="is-check"></span>
        <span class="content">쇼핑하러 가기</span>
      </li>
      <li>
        <span class="is-check"></span>
        <span class="content">쇼핑하러 가기</span>
      </li>
      <li>
        <span class="is-check"></span>
        <span class="content">쇼핑하러 가기</span>
      </li>
      <li>
        <span class="is-check"></span>
        <span class="content">쇼핑하러 가기</span>
      </li>
      <li>
        <span class="is-check"></span>
        <span class="content">쇼핑하러 가기</span>
      </li>
      <li>
        <span class="is-check"></span>
        <span class="content">쇼핑하러 가기</span>
      </li>
      <li>
        <span class="is-check"></span>
        <span class="content">쇼핑하러 가기</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todo"
}
</script>

<style scoped>
.todo-container {
  background: #ffffff50;
  border-radius: 10px;
  padding: 10px;
}

.head-wrap {
  display: flex;
  justify-content: space-between;
}

.title {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
}

.head-wrap button {
  color: #fff;
}

.middle-line {
  width: 100%;
  height: 1px;
  background: #fff;
  margin-bottom: 5px;
}

.to-do-list-wrap {
  display: flex;
  flex-direction: column;
}

.to-do-list-wrap li {
  display: flex;
  margin-bottom: 5px;
}

.to-do-list-wrap li:last-child {
  margin-bottom: 0;
}

.is-check {
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  margin-right: 5px;
}

.content {
  font-size: 14px;
  color: #fff;
}
</style>