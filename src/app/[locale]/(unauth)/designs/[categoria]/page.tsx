import Link from "next/link";

export default function Category({ params }: { params: { category: string } }) {
  return <div>My Category: {params.category}
  <Link href="/designs/hamburgueria/pack-design-hamburgueria" >clique aqui</Link>
  </div>
}