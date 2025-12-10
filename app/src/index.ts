import './styles.css';

// Guard server-side environments (e.g., SSR or static prerender) where document/window don't exist.
if (typeof document !== 'undefined') {
	const ensureRoot = (): HTMLElement => {
		const existing = document.getElementById('root');
		if (existing) {
			return existing;
		}

		const created = document.createElement('div');
		created.id = 'root';
		document.body.appendChild(created);
		return created;
	};

	const renderHello = (): void => {
		const root = ensureRoot();
		root.innerHTML = '';

		const card = document.createElement('main');
		card.className = 'hello-card';

		const badge = document.createElement('span');
		badge.className = 'hello-badge';
		badge.textContent = 'TypeScript + CSS';

		const title = document.createElement('h1');
		title.textContent = 'Hello, World!';

		const subtitle = document.createElement('p');
		subtitle.className = 'hello-subtitle';
		subtitle.textContent = 'Base pronta para crescer.';

		card.append(badge, title, subtitle);
		root.appendChild(card);
	};

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', renderHello);
	} else {
		renderHello();
	}
}
