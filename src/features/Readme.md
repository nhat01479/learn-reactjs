1. useEffect(callback)
    - Gọi callback mỗi khi component re-render
    - Gọi callback sau khi component thêm element vào DOM
2. useEffect(callback, [])
    - Chỉ gọi callback 1 lần sau khi component mounted
3. useEffect(callback, [ dependencies ])
    - Gọi callback mỗi khi 1 hoặc nhiều giá trị trong mảng này thay đổi