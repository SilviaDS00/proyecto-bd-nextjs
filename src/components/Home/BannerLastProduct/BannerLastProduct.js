import * as styles from "./BannerLastProduct.module.scss";
import { useEffect, useState } from "react";
import { Product } from "@/api";
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import Link from "next/link";

const productCtrl = new Product();

export function BannerLastProduct() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await productCtrl.getLastProduct();
        setProduct(response.data[0]);
      } catch (error) {
        throw error;
      }
    })();
  });

  if (!product) return null;

  const wallpaper = product.attributes.image;

  const date = DateTime.fromISO(product.attributes.publishedAt).toLocaleString(
    DateTime.DATE_FULL
  );

  return (
    <div className={styles.container}>
      <Image src={wallpaper.data.attributes.url} className={styles.wallpaper} />
    </div>
  );
}
