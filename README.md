Sử dụng redux:
const { createSlice } = require("@reduxjs/toolkit");

-   Mỗi tính năng sẽ tạo 1 file Slice.js bằng createSlice()
-   Các action sẽ được tự động tạo ra dựa vào danh sách khai báo trong reducers - export reducer

-   Trong thư mục store tạo file index.js là store chung cho dự án
-   import { configureStore } from "@reduxjs/toolkit";
-   import counterReducer from "./counterSlice"; //counterReducer là bí danh cho reducer muốn import
-   Khai báo danh sách reducer muốn export bằng const rootReducer = {}
-   Tạo store
-   const store = configureStore({
    reducer: rootReducer,
    });
-   export store

*   Để sử dụng reducer từ store:
    <Provider store={store}>
    <App />
    </Provider>
*   Ở component cần dùng reducer:

    //counter là tên của reducer được khai báo trong rootReducer phía trên
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const handleIncrease = () => {
    const action = increase();
    //increase() là action được khai báo trong reducers khi createSlice()
    dispatch(action);
    };

---

Sử dụng styles.module.css

-   Mỗi component sẽ tạo 1 file style.module.css
-   import styles from "./styles.module.css";
-   Khi áp dụng css cho className:  
    <button className={styles.button} > Increase </button>
    //button: được khai báo css ở file styles

---

Sử dụng clsx để thay đổi className:

-   Cú pháp:
    <p className={clsx({ tên class: true/false})}> Cú pháp</p>
    Nếu true sẽ hiện tên class, nếu false thì không hiện

        (Thêm dấu ngoặc vuông vào tên class nếu sử dụng chung với module.css)

        <div>
            <p>Sử dụng clsx để thay đổi className</p>
            <p className={clsx({ [styles.hidden]: hidden })}>Xin chào!</p>
            <button onClick={handleClick}>Click me</button>
        </div>

        const [hidden, setHidden] = useState(false);
        const handleClick = () => {
        setHidden(!hidden);
        };
