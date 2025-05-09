document.addEventListener('DOMContentLoaded', function() {
    // 搜索切换功能
    const searchToggle = document.querySelector('.search-toggle');
    const searchContainer = document.querySelector('.search-container');
    
    if (searchToggle && searchContainer) {
        searchToggle.addEventListener('click', function() {
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                searchContainer.querySelector('input').focus();
            }
        });
    }
    
    // 移动端菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }

    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 添加移动端导航样式
    const addMobileNavStyles = () => {
        if (window.innerWidth <= 768 && mainNav) {
            if (!mainNav.classList.contains('mobile-styled')) {
                mainNav.classList.add('mobile-styled');
                mainNav.style.maxHeight = mainNav.classList.contains('active') ? mainNav.scrollHeight + 'px' : '0';
                mainNav.style.overflow = 'hidden';
                mainNav.style.transition = 'max-height 0.3s ease';
            }
        } else if (mainNav && mainNav.classList.contains('mobile-styled')) {
            mainNav.classList.remove('mobile-styled');
            mainNav.style.maxHeight = '';
            mainNav.style.overflow = '';
        }
    };
    
    // 初始化调用
    addMobileNavStyles();
    
    // 窗口大小改变时重新调整
    window.addEventListener('resize', addMobileNavStyles);
    
    // 如果有菜单切换按钮，添加切换逻辑
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.style.maxHeight = mainNav.classList.contains('active') ? mainNav.scrollHeight + 'px' : '0';
            }
        });
    }
}); 