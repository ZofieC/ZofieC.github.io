let a = 2;
            let b = "2";
            console.log(typeof(a))
            console.log(typeof(b))

            console.log(a+a)
            console.log(a+b)
            let arr = ["jedna", "dva", "tri"];
            console.log(arr);

            for (let i = 0; i < arr.length; i++) {
                console.log(i + " : " + arr[i]);
            }

            let div = document.createElement("div");
            div.innerHTML = "pokus";
            el.appendChild(div);

            for (let i = 0; i < arr.length; i++) {
                let div = document.createElement("div");
                div.innerHTML = arr[i];
                el.appendChild(div);
            }