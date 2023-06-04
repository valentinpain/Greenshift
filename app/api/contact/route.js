export async function POST(req,res) {
    const body = await res.json();

    const {name,phone,email,message} = body;

    if(name && phone && email && message){
        //TODO logic to send email here
        return new Response(null,{status : 200});
    }

    return new Response(null, {status : 405});

}