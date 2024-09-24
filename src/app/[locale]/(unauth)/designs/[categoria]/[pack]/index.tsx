export function generateStaticParams() {
  return [
    { categoria: 'a', pack: '1' },
    { categoria: 'b', pack: '2' },
    { categoria: 'c', pack: '3' },
  ];
}

// Three versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
// - /products/a/1
// - /products/b/2
// - /products/c/3
export default function Pack({ params }: { params: { categoria: string; pack: string } }) {
  const { pack } = params;

  return <main>{pack}</main>;
  // ...
}
