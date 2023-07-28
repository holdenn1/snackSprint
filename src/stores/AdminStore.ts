import { defineStore } from "pinia";
import {
  ref as refStorafe,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { ref as refDatabase, push, set, remove } from "firebase/database";
import { realTimeDb, storage } from "@/firebase";
import type { IProductForm, Product } from "@/types";
import { useMainStore } from "@/stores/MainStore";
import { useToastify } from "vue-toastify-3";

export const useAdminStore = defineStore("adminStore", () => {
  const mainStore = useMainStore();
  const { toastify } = useToastify();
  async function uploadProduct(product: IProductForm) {
    try {
      const metadata = {
        contentType: "image/jpeg",
      };

      const storageRef = refStorafe(
        storage,
        "images/" + product.productCover.name
      );

      const uploadProductCover = uploadBytesResumable(
        storageRef,
        product.productCover,
        metadata
      );

      await new Promise((res, rej) => {
        uploadProductCover.on("state_changed", null, rej, res as () => void);
      });

      const downloadURL = await getDownloadURL(uploadProductCover.snapshot.ref);

      const productRef = await push(refDatabase(realTimeDb, `products/`));

      await set(refDatabase(realTimeDb, `products/${productRef.key}`), {
        id: productRef.key,
        productName: product.productName,
        productDescription: product.productDescription,
        productPrice: product.productPrice,
        productWeight: product.productWeight,
        product: product.product,
        productCover: downloadURL,
      });
      toastify("success", "Товар додано!");
    } catch (e) {
      toastify("error", "Сталася помилка, спробуйте пізніше!")
    }
  }

  async function removeProduct(product: Product) {
    try {
      await remove(refDatabase(realTimeDb, `products/${product.id}`));
      toastify("success", "Товар видалено");
    } catch (e) {
      toastify("error", "Сталася помилка, спробуйте пізніше!");
    }
  }

  return {
    uploadProduct,
    removeProduct,
  };
});
