Dùng để thay đổi trạng thái dữ liệu
Component sẽ được re-render sau khi dữ liệu được setState
initState: chỉ dùng cho lần đầu, nếu không truyền thì mặc định là null
setState(): dùng để thay thế state bằng giá trị mới, có thể dùng với callback
const [state, setState] = useState(initState)

+ initState: khởi tạo trạng thái, 
            gồm tất cả các kiểu dữ liệ mà JS có (number, string, null, underfined, boolean, array, object, function)
+ state: lần đầu tiên nó sẽ bằng initState
+ setSate(): 
    - là 1 hàm, cập nhật state mới cho state
    - mỗi khi setState() thì component sẽ được re-render
    - setState(newState) || setState(callback) 
