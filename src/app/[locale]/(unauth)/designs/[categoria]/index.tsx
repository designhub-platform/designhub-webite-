export default function Category({ params }: { params: { category: string } }) {
  return <div>My Category: {params.category}</div>
}