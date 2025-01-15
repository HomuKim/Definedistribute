document.addEventListener('DOMContentLoaded', function() {
	const mainImage = document.getElementById('mainImage');
	const introTitle = document.getElementById('introTitle');
	const introText = document.getElementById('introText');
	const buttons = document.querySelectorAll('.intro-button');
	const introContent = document.querySelector('.intro-content');

	const introData = {
		ceo: {
			image: 'images/ceo.jpg',
			title: '안녕하세요<br> 디파인더바디짐 CEO 전혜성입니다.',
			text: '저희 디파인더바디를 찾아주셔서 진심으로 감사드립니다.<br>여러분의 건강과 목표 달성을 위해 최고의 피트니스 환경을 제공하는 것이 저희의 사명입니다. 각 회원님의 개별적인 목표와 라이프스타일에 맞춘 맞춤형 서비스를 제공하며, 건강한 변화와 성장을 함께할 것입니다.<br><br>' +
				'앞으로도 더욱 혁신적이고 전문적인 서비스를 통해 여러분의 운동 여정을<br>' + ' 지원하겠습니다. 여러분과 함께 성장하며, 최고의 건강을 이루는 여정이 되기를 <br>' + '바랍니다. <br>' + '감사합니다.<br><br>' +
				'전혜성 드림'
		},
		manager: {
			image: 'images/manager.jpg',
			title: '안녕하세요<br> 디파인더바디짐 매니저 김호연입니다.',
			text: '저희 디파인더바디에 방문해 주셔서 진심으로 감사드립니다.<br> 저는 회원님들이 목표를 이루고 건강한 변화를 경험하실 수 있도록, 스태프들과 <br>함께 항상 최선을 다해 지원하고 있습니다.<br><br> 각자의 목표에 맞춘 맞춤형 운동 환경을 제공하고, 여러분의 여정에 함께할 수 있어 매우 기쁩니다. 언제든지 필요한 도움이 있으면 말씀해 주세요.<br> 여러분의 건강과 성장을 위해 늘 곁에서 힘이 되어 드리겠습니다. 감사합니다.<br><br> 김호연 드림'
		}
	};

	function changeIntro(role) {
		// 버튼 클릭 시에만 페이드 효과 적용
		introContent.classList.add('fade-out');

		setTimeout(() => {
			const content = introData[role];
			mainImage.src = content.image;
			mainImage.alt = content.title;
			introTitle.innerHTML = content.title;
			introText.innerHTML = content.text;

			buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.role === role));

			introContent.classList.remove('fade-out');
			introContent.classList.add('fade-in');

			setTimeout(() => {
				introContent.classList.remove('fade-in');
			}, 500);
		}, 500);
	}

	buttons.forEach(button => {
		button.addEventListener('click', () => changeIntro(button.dataset.role));
	});

	// 초기 인사말 설정 (애니메이션 없이)
	const initialRole = 'ceo';
	const initialContent = introData[initialRole];
	mainImage.src = initialContent.image;
	mainImage.alt = initialContent.title;
	introTitle.innerHTML = initialContent.title;
	introText.innerHTML = initialContent.text;
});

window.addEventListener('load', function() {
	if (sessionStorage.getItem('adminLoggedIn') === 'true') {
		document.body.classList.add('admin-logged-in');
		makeContentEditable(true);
	}
	$("#header").load("header.html", function() {
		// 헤더 로드 완료 후 실행될 코드
		if (typeof initializeHeader === 'function') {
			initializeHeader();
		}
	});
	$("#footer").load("footer.html");
});