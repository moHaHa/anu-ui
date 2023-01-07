<template>
  <div class="container p-6 mx-auto">
    <!-- Buttons -->
    <div class="flex flex-wrap gap-4 mb-8">
      <ABtn>Primary</ABtn>

      <ABtn color="success"> Success </ABtn>

      <ABtn color="info"> Info </ABtn>

      <ABtn color="warning"> Warning </ABtn>

      <ABtn color="danger"> Danger </ABtn>
    </div>

    <!-- Cards -->
    <div class="grid-row sm:grid-cols-2 cards-demo-container">
      <!-- 👉 Using props -->
      <ACard
        title="Card title"
        subtitle="Chocolate cake tiramisu donut"
        text="Ice cream sweet pie pie dessert sweet danish. Jelly jelly beans cupcake jelly-o chocolate bonbon chocolate bar."
      />

      <!-- 👉 Using custom content (without props) -->
      <ACard>
        <div class="a-card-body a-card-spacer">
          <ATypography
            title="Card title"
            subtitle="Chocolate cake tiramisu donut"
          />
          <p class="text-sm">
            Ice cream sweet pie pie dessert sweet danish. Jelly jelly beans
            cupcake jelly-o chocolate bonbon chocolate bar.
          </p>
        </div>
      </ACard>
    </div>
  </div>
</template>

<style>
html,
body {
  background: #f4f5fa;
}
</style>