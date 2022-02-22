<template>
  <div>
    <h2>Conctactez nous</h2>
    <form>
      <input
        required
        name="name"
        placeholder="Name"
        type="text"
        autocomplete="off"
      />
      <input
        required
        name="email"
        placeholder="E-mail"
        type="email"
        autocomplete="off"
      />
      <textarea
        name="message"
        rows="4"
        placeholder="Message"
      ></textarea>
      <button class="button">Send</button>
    </form>
  </div>
</template>