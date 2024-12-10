<template>
  <VNavigationDrawer
    :elevation="0"
    v-model="drawer"
    location="right"
    temporary
    color="var(--text_light)"
    :width="688"
    :mobile="true"
    border="none"
    :order="-1"
    class="preventDefaultTransition"
  >
    <div style="grid-gap: 0" class="h-full overflow-hidden justify_auto">
      <!-- header -->
      <div
        :class="{ 'activeShadow top': activeShadow }"
        class="relative preventPreventDefaultTransition h-mc minh-mc p-[2.4rem] bg-main-23"
      >
        <div class="flex flex_between gap-5">
          <div>
            <span class="mb-[4px] inline-block font-rhd font-medium text-lg text-font-6">
              Property Details
            </span>
            <p class="font-rhd font-medium text-sm text-font-1">
              View property details and Features
            </p>
          </div>
          <ModalsCloseBtn @closeModal="drawer = false" />
        </div>
      </div>
      <!-- content -->
      <div
        @scroll="setOnScroll"
        ref="scrollRef"
        class="hidden__hover overflow-auto px-[2.4rem] py-[3.7rem]"
      >
        <div class="space-y-[32px]">
          <!-- title -->
          <div class="">
            <h4 class="font-rhd font-semibold text-p text-font-6 mb-[10px]">BeniRose</h4>
            <span class="font-rhd text-sm text-font-2"
              >Apartment 1 | Block E | Maitama Abuja</span
            >
            <!-- stars and reviews -->
            <div class="reviews flex items-center mt-[16px] w-full gap-[5px]">
              <div
                v-for="n in 5"
                :key="n + 332"
                class="stars flex items-center text-md text-font-3"
              >
                <SvgStars
                  :svg-fill="n <= 4 ? 'var(--success_color3)' : 'var(--bg_color24)'"
                />
              </div>
              <span>4</span>
              <span class="inline-block text-font-2 ml-[5px]">
                | {{ $formatNumberReview(266) }} Reviews
              </span>
            </div>
          </div>
          <!-- variations -->
          <div>
            <h4 class="font-rhd text-lg font-normal text-font-3 mb-[10px]">Amenities</h4>
            <div class="p-[16px] bg-main rounded-[16px] space-y-[12px]">
              <div
                class="flex items-center flex-wrap gap-[46px] bg-font border-[1px] border-bc rounded-[10px] p-[8px]"
              >
                <div class="flex items-center gap-[16px]">
                  <span class="text-sm text-bc-10 font-rhd"
                    >1 Bed | 1 Bath | Solar | Pool | Inverter | Cooling Fans</span
                  >
                </div>
                <span class="text-sm text-bc-10 font-rhd"
                  >Maintananece Fee: {{ $formatCurrency(12000) }}</span
                >
              </div>
            </div>
          </div>
          <!-- media -->
          <div>
            <div
              class="p-[20px] bg-main rounded-[16px] gap-[24px] flex-wrap flex items-center"
            >
              <div
                class="imageWrapper w-[13.2rem] min-w-[13.2rem] h-[13.2rem] overflow-hidden rounded-[8px] aspect-auto"
              >
                <img
                  src="/images/temp/1.jpg"
                  class="w-full h-full object-cover object-top"
                  alt="Kent Rentals"
                />
              </div>
              <div
                class="imageWrapper w-[13.2rem] min-w-[13.2rem] h-[13.2rem] overflow-hidden rounded-[8px] aspect-auto"
              >
                <img
                  src="/images/temp/2.jpg"
                  class="w-full h-full object-cover object-top"
                  alt="Kent Rentals"
                />
              </div>
              <div
                class="imageWrapper w-[13.2rem] min-w-[13.2rem] h-[13.2rem] overflow-hidden rounded-[8px] aspect-auto"
              >
                <img
                  src="/images/temp/3.jpg"
                  class="w-full h-full object-cover object-top"
                  alt="Kent Rentals"
                />
              </div>
              <div
                class="imageWrapper w-[13.2rem] min-w-[13.2rem] h-[13.2rem] overflow-hidden rounded-[8px] aspect-auto"
              >
                <img
                  src="/images/temp/4.jpg"
                  class="w-full h-full object-cover object-top"
                  alt="Kent Rentals"
                />
              </div>
            </div>
          </div>
          <!-- other content -->
          <div class="space-y-[24px]">
            <div>
              <span class="inline-block mb-[5px] font-rhd text-lg text-font-21"
                >Description</span
              >
              <p class="font-rhd text-sm text-font-21">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas saepe
                distinctio, culpa ducimus veritatis cum atque est dolores expedita? Sit
                totam eos nam impedit fuga est illo minus ut nesciunt, debitis laborum
                molestias maxime deleniti eaque praesentium, iste sapiente, tenetur quasi?
                Id ducimus accusantium, quo recusandae commodi corrupti fugiat et vitae
                distinctio itaque. Atque corporis quibusdam optio totam vero!
                Necessitatibus nobis sint atque hic magni, earum sunt quod ratione facilis
                nemo quo ad perferendis iste vel laudantium vero laboriosam voluptatem.
                Odio dolorem labore consectetur facilis adipisci, nemo numquam sequi
                veniam modi vero impedit possimus repellendus velit ipsa iste blanditiis
                eum?
              </p>
            </div>
            <div>
              <span class="inline-block mb-[5px] font-rhd text-lg text-font-21"
                >Details</span
              >
              <p class="font-rhd text-sm text-font-21">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas saepe
                distinctio, culpa ducimus veritatis cum atque est dolores expedita? Sit
                totam eos nam impedit fuga est illo minus ut nesciunt, debitis laborum
                molestias maxime deleniti eaque praesentium, iste sapiente, tenetur quasi?
                Id ducimus accusantium, quo recusandae commodi corrupti fugiat et vitae
                distinctio itaque. Atque corporis quibusdam optio totam vero!
                Necessitatibus nobis sint atque hic magni, earum sunt quod ratione facilis
                nemo quo ad perferendis iste vel laudantium vero laboriosam voluptatem.
                Odio dolorem labore consectetur facilis adipisci, nemo numquam sequi
                veniam modi vero impedit possimus repellendus velit ipsa iste blanditiis
                eum? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
                molestiae doloribus sint consequuntur temporibus in! Harum, doloremque
                fugit qui culpa commodi possimus? Illo temporibus iste esse hic
                repudiandae voluptates eius! Libero, quod perspiciatis in voluptas neque
                minima perferendis vero labore incidunt provident eveniet maxime,
                voluptates sed, tempora corrupti vel dolorum praesentium ullam. Nulla
                saepe illum dolore accusamus? Sed dicta qui explicabo! Dolorum repellendus
                sint, culpa, temporibus harum inventore reprehenderit optio tenetur sit
                recusandae dolores vero eveniet debitis dolorem doloremque error, vitae
                sequi voluptas autem porro eum hic. Non quibusdam magnam necessitatibus
                odio atque aut voluptatem! Ullam quia, suscipit culpa delectus inventore
                consequuntur quasi. Earum, reiciendis hic! Ex mollitia, libero impedit
                iste suscipit perferendis. Vero recusandae omnis corporis quam, soluta
                enim dignissimos molestiae neque magnam minima ipsa, quaerat esse delectus
                ratione? Laudantium libero consequatur fugiat ullam animi reiciendis,
                recusandae et itaque quas dicta inventore minima, aliquam maiores ab
                quisquam nihil natus cupiditate eum voluptate provident illo dolorem
                consectetur? Quasi minima ipsum repudiandae maxime sit aliquam deleniti
                tempora reprehenderit iure, dicta nobis incidunt cumque excepturi ea
                quidem sequi, ex eligendi! Voluptatum unde, dicta temporibus
                exercitationem qui soluta officia autem repudiandae optio est natus
                excepturi ullam, dignissimos veniam ut, reprehenderit totam a sapiente
                obcaecati facilis quibusdam aspernatur porro nemo. Quis cum incidunt fugit
                ducimus vitae dolores nam recusandae culpa quasi cumque excepturi
                obcaecati dolore quas, ea facilis suscipit libero rerum maiores
                dignissimos nemo aut necessitatibus inventore. Ducimus cupiditate modi
                inventore quia consequuntur totam, quaerat itaque nesciunt aperiam,
                perspiciatis veniam quasi incidunt vel odit similique voluptatem.
                Doloremque quo minus ab eos nam quidem recusandae, perferendis eius vero
                vel eveniet totam harum laborum dolor! Ipsam odit est quas, aliquam hic in
                autem labore quasi corporis pariatur eius alias illo iste atque architecto
                at dolorum. Repudiandae maiores quisquam temporibus distinctio, optio
                debitis sit aliquid odio eaque doloribus consectetur inventore dolor
                labore ab accusantium commodi totam non! Est, quam? Minus quas inventore
                quidem commodi tempora alias. Repellendus qui corporis neque
                necessitatibus magni animi vel! Unde iusto eius voluptates iure molestias
                commodi eligendi dignissimos. Molestiae voluptates rerum ipsum, officiis
                repudiandae libero at, totam natus fuga quam error pariatur, veniam saepe
                nihil. Nostrum reprehenderit ex qui atque minus ipsa perferendis, dolore
                tempora optio distinctio asperiores temporibus similique magnam
                exercitationem soluta? Quibusdam eveniet at, dolorum vero, esse, harum
                eius doloribus eaque dicta porro obcaecati illo eum alias dolorem ex.
                Ratione, nostrum. Iste soluta est alias, eveniet delectus sint praesentium
                quae incidunt nobis unde eos fuga eum ipsam cumque harum et accusantium
                rerum, quisquam doloribus. Natus quis voluptate sint at possimus rem
                aperiam nesciunt veritatis nam fuga. Dolorum unde totam debitis voluptates
                veniam praesentium mollitia suscipit autem veritatis ipsam possimus
                molestiae numquam dolores, magni architecto modi libero illo iste, aut, ut
                porro? Hic eius eos iusto maxime? Hic dicta doloremque labore quisquam
                quae molestiae sequi laboriosam animi facere delectus tenetur, odit
                ducimus assumenda culpa laborum et. Quae, nemo eligendi. Consequatur
                aperiam commodi sint numquam perferendis, pariatur autem animi ratione at
                nobis obcaecati illum voluptate, minus quam dignissimos a officiis nostrum
                natus?
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- actions -->
      <div
        :class="{ activeShadow, bottomShadow }"
        class="preventPreventDefaultTransition h-mc minh-mc ] p-[2.4rem] relative"
      >
        <div class="flex_between justify-end gap-5">
          <BaseButton
            style="border: 1px solid var(--border_color2)"
            class="pill"
            height="4.4rem"
            min-width="auto"
            min-height="auto"
            width="max-content"
            color="var(--text_light)"
            text="Compare with other products"
            :text-style="{
              fontSize: 'var(--text_sm)',
              color: 'var(--text_dark3)',
            }"
            @click="navigatetoCompare()"
          />
        </div>
      </div>
    </div>
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
const { emit, on, off } = useEventBus();
const appResourceStore = useAppResourceStore();
const drawer = ref(false);
const activeShadow = ref(false);
const bottomShadow = ref(false);
const instance = getCurrentInstance();
const setOnScroll = () => {
  const ref = instance?.proxy?.$refs?.scrollRef as HTMLElement;
  if (ref) {
    const contentHeight = ref.scrollHeight;
    const contentWidth = ref.scrollWidth;
    const clientHeight = ref.clientHeight;
    const clientWidth = ref.clientWidth;
    if (ref.scrollTop) activeShadow.value = true;
    else activeShadow.value = false;
    if (contentHeight > clientHeight || contentWidth > clientWidth) {
      bottomShadow.value = true;
    } else bottomShadow.value = false;
  }
};

const navigatetoCompare = () => {
  appResourceStore.isCompare = true;
  drawer.value = false;
  navigateTo("/property/comparision");
};
onMounted(() => {
  on("openViewProductPanel", () => {
    drawer.value = true;
    setTimeout(() => {
      setOnScroll();
    }, 200);
  });
});
onUnmounted(() => {
  off("openViewProductPanel");
});
</script>

<style lang="scss" scoped>
.justify_auto > .relative {
  box-shadow: none;
  &::before,
  &::after {
    content: "";
    position: absolute;
    max-width: 50%;
    height: 1px;
    width: 0px;
    background: var(--border_color2);
    transition: all 0.4s ease-in-out !important;
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
  &:first-child {
    &::before,
    &::after {
      bottom: 0px;
    }
  }
  &:last-child {
    &::before,
    &::after {
      top: 0px;
    }
  }
  &.activeShadow,
  &.bottomShadow {
    &::before,
    &::after {
      width: 100%;
    }
    box-shadow: 0px -2px 24px 8px rgba(142, 142, 142, 0.08);
  }
}
</style>
