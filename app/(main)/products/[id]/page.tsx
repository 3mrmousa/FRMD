
export default async function ProductPage({params}: {params: {id: string}}){
    const {id} = await params;

    // const product = await getProduct(id);
    return (
        <div>
            <h1>Product Page</h1>
        </div>
    )
}