import{html}from'../../node_modules/lit-html/lit-html.js';
import {getFurniture}from '../api/data.js';
import {itemTemplate}from'./common/item.js';

const dashboardTemplate=(data)=>html`
<div class="row space-top">
<div class="col-md-12">
    <h1>Welcome to Furniture System</h1>
    <p>Select furniture from the catalog to view details.</p>
</div>
</div>
<div class="row space-top">
${data.map(itemTemplate)} 
</div>`;

// const itemTemplate=(item)=>html`
// <div class="col-md-4">
//     <div class="card text-white bg-primary">
//         <div class="card-body">
//                 <img src=${item.img} />
//                 <p> ${item.description}</p>
//                 <footer>
//                     <p>Price: <span>${item.price} $</span></p>
//                 </footer>
//                 <div>
//                     <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
//                 </div>
//         </div>
//     </div>
// </div>
// </div>`;


export async function dashboardPage(ctx){
    const data=await getFurniture();

    ctx.render(dashboardTemplate(data));
}

{/* <div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
                <img src="./images/sofa.jpg" />
                <p>Description here</p>
                <footer>
                    <p>Price: <span>1200 $</span></p>
                </footer>
                <div>
                    <a href="#" class="btn btn-info">Details</a>
                </div>
        </div>
    </div>
</div>
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
                <img src="./images/chair.jpg" />
                <p>Description here</p>
                <footer>
                    <p>Price: <span>55 $</span></p>
                </footer>
                <div>
                    <a href="#" class="btn btn-info">Details</a>
                </div>
        </div>
    </div> */}