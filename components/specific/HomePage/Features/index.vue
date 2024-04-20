<script setup lang="ts">
import ZazaFeatureCard from '@/components/shared/Cards/ZazaFeature/index.vue'
</script>

<template>
  <div class="container grid lg:grid-cols-4 grid-cols-1 gap-4 px-2">
    <NuxtLink
      to="https://trustseal.enamad.ir/?id=358706&amp;Code=Y7Lej2Z0gre6RZcvBnXY"
      target="_blank"
    >
      <ZazaFeatureCard
        title="چرا باید به زازا اعتماد کنیم؟"
        text="دارای نشان 'اینماد' از وزارت صنعت، معدن و تجارت"
        short-desc="و دارای درگاه پرداخت اختصاصی از بانک سامان"
        button-text="مشاهده نشان اینماد"
      />
    </NuxtLink>
    <NuxtLink to="/contact" target="_blank">
      <ZazaFeatureCard
        title="ببین و بخر"
        text="امکان بازدید از فروشگاه و خرید حضوری ."
        short-desc="زازا کالا در فروشگاهی به مساحت بیش از 1000 متر مربع پذیرای شماست"
        button-text="نشانی فروشگاه"
      />
    </NuxtLink>
    <NuxtLink to="/contact" target="_blank">
      <ZazaFeatureCard
        title="ارسال فوری به سراسر کشور"
        text="ارسال فوری بار به
    سراسر ایران عزیز "
        short-desc="فروشگاه زازا کالا محصولات مشتریان خود را به
    سراسر کشور ارسال می نماید."
        button-text="نشانی فروشگاه"
      />
    </NuxtLink>
    <ZazaFeatureCard
      title="معنی زازا چیست؟"
      text="زازا کالا یک مجموعه واردات و توزیع ابزارآلات، کالای ساختمانی و صنعتی است."
      short-desc="مجموعه زازاکالا از شرکت های یک هلدینگ بزرگ ساختمانی می باشد که در سال 96 در اداره ثبت شرکت ها به ثبت رسیده است..."
      button-text="درباره زازا"
      link="/about"
    />
  </div>
</template>
