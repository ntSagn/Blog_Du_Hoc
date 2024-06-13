
document.addEventListener('DOMContentLoaded', function () {
    // Kiểm tra xem dữ liệu 'post' đã tồn tại trong localStorage chưa
    if (!window.localStorage.getItem('post')) {
        // Dữ liệu mặc định
        const defaultData = [
            {
                id: '1',
                path: "../storage/post_1/text.txt",
                state: '0',
                view: '0',
                datePost: '2017-10-11',
                namePost: 'VÌ SAO AUSTRALIA MUỐN MỞ CỬA BIÊN GIỚI ĐÓN DU HỌC SINH',
                isPost: '1'
            },
            {
                id: '2',
                path: "../storage/post_2/text.txt",
                state: '0',
                view: '0',
                datePost: '2017-10-11',
                namePost: 'TẦM QUAN TRỌNG CỦA HOẠT ĐỘNG NGOẠI KHÓA TRONG HỒ SƠ DU HỌC',
                isPost: '1'
            },
            {
                id: '3',
                path: "../storage/post_3/text.txt",
                state: '0',
                view: '0',
                datePost: '2017-10-11',
                namePost: 'CÁCH VIẾT BÀI TỰ LUẬN ẤN TƯỢNG VÀO ĐẠI HỌC MỸ',
                isPost: '1'
            },
            {
                id: '4',
                path: "../storage/post_4/text.txt",
                state: '0',
                view: '0',
                datePost: '2017-10-11',
                namePost: 'HỘI THẢO ONLINE CÙNG UNIVERSITY OF MELBOURNE – TRINITY COLLEGE',
                isPost: '1'
            },
            {
                id: '5',
                path: "../storage/post_5/text.txt",
                state: '0',
                view: '0',
                datePost: '2017-10-11',
                namePost: 'ĐẠI HỌC ADELAIDE, AUSTRALIA CẤP HỌC BỔNG ĐẾN 50%',
                isPost: '1'
            }
        ];
        // Lưu dữ liệu mặc định vào localStorage
        window.localStorage.setItem('post', JSON.stringify(defaultData));
    }

    if (!window.localStorage.getItem('user')) {
        let users = [
            {
                fullName: 'Trương Công Phúc',
                idUser: 'Admin000',
                Password: '123123',
                role: 'admin',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Nguyễn Thanh Sang',
                idUser: 'Admin001',
                Password: '123123',
                role: 'admin',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Trần Tiến Phát',
                idUser: 'Admin002',
                Password: '123123',
                role: 'admin',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Đỗ Thế Tùng',
                idUser: 'Admin003',
                Password: '123123',
                role: 'admin',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Đỗ Tiến Đạt',
                idUser: 'User123',
                Password: '123123',
                role: 'user',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Trần Thanh Huy',
                idUser: 'User456',
                Password: '123123',
                role: 'user',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Lê Xuân Thịnh',
                idUser: 'User789',
                Password: '123123',
                role: 'user',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Nguyễn Anh Tuấn',
                idUser: 'User222',
                Password: '123123',
                role: 'user',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Trần Khang Thịnh',
                idUser: 'User333',
                Password: '123123',
                role: 'user',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Lê Triệu Vỹ',
                idUser: 'User444',
                Password: '123123',
                role: 'user',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Trương Công Đức',
                idUser: 'User555',
                Password: '123123',
                role: 'user',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Lê Tấn Minh Toàn',
                idUser: 'User666',
                Password: '123123',
                role: 'user',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Lê Tấn Tài',
                idUser: 'User777',
                Password: '123123',
                role: 'user',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Trần Thị Tèo',
                idUser: 'User888',
                Password: '123123',
                role: 'user',
                stateLogin: '0',
                state: '1'
            },
            {
                fullName: 'Nguyễn Văn Đớ',
                idUser: 'User999',
                Password: '123123',
                role: 'user',
                stateLogin: '0',
                state: '1'
            },

        ];
        window.localStorage.setItem('users', JSON.stringify(users));
    }

    if (!window.localStorage.getItem('coment')) {
        let coments = [
            {
                idComent: '1',
                idPost: '1',
                idUser: 'User123',
                valueText: 'Bạn có thể cho tôi thông tin thêm về khóa được không ?',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-11-20',
                state: 1
            },
            {
                idComent: '2',
                idPost: '1',
                idUser: 'User456',
                valueText: 'Bài viết thật là hay !!',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-11-19',
                state: 1
            },
            {
                idComent: '3',
                idPost: '1',
                idUser: 'User789',
                valueText: 'Tôi cảm thấy thật tuyệt vời',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-11-20',
                state: 1
            },
            {
                idComent: '4',
                idPost: '1',
                idUser: 'User111',
                valueText: 'Bạn có thể cho tôi thông tin thêm về khóa được không ?',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-11-11',
                state: 1
            },
            {
                idComent: '5',
                idPost: '2',
                idUser: 'User123',
                valueText: 'Hay !!',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-11-12',
                state: 1
            },
            {
                idComent: '6',
                idPost: '2',
                idUser: 'User222',
                valueText: 'Bạn có thể cho tôi thông tin thêm về khóa được không ?',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-11-13',
                state: 1
            },
            {
                idComent: '7',
                idPost: '3',
                idUser: 'User123',
                valueText: 'Bạn có thể cho tôi thông tin thêm về khóa được không ?',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-10-20',
                state: 1
            },
            {
                idComent: '8',
                idPost: '3',
                idUser: 'User333',
                valueText: 'Bạn có thể cho tôi thông tin thêm về khóa được không ?',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-10-20',
                state: 1
            },
            {
                idComent: '9',
                idPost: '3',
                idUser: 'User444',
                valueText: 'Tôi dang học ở trường đó nè !!',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-09-20',
                state: 1
            },
            {
                idComent: '10',
                idPost: '4',
                idUser: 'User555',
                valueText: 'Có ai muốn đăng ký học cùng tôi không ?',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-11-10',
                state: 1
            },
            {
                idComent: '11',
                idPost: '4',
                idUser: 'User666',
                valueText: 'Thật tuyệt vời !!',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-02-20',
                state: 1
            },
            {
                idComent: '12',
                idPost: '5',
                idUser: 'User777',
                valueText: 'Tôi cảm thấy bài viết thật hay và chi tiết.',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-11-10',
                state: 1
            },
            {
                idComent: '13',
                idPost: '5',
                idUser: 'User888',
                valueText: 'Viết chi tiết lắm',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-11-14',
                state: 1
            },
            {
                idComent: '14',
                idPost: '5',
                idUser: 'User999',
                valueText: 'Rất thuyết phục !!',
                NumberLike: 0,
                NumberDislike: 0,
                datePost: '2023-08-20',
                state: 1
            },
        ];

        let temp = JSON.stringify(coments);
        window.localStorage.setItem('coment', temp);

    }
    console.log('Data is loaded');
});