<<<<<<< HEAD
function createModeWatcher() {
	let mode = $state('dark'); // 'light' | 'dark' | 'system'
	let isStorage = $state('');

	return {
		get mode() {
			if ($effect.tracking() && !localStorage.getItem('theme')) {
				$effect(() => {
					mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
					const interval = setInterval(() => {
						isStorage = window.localStorage.getItem('theme') ?? '';
						if (isStorage) {
							mode = isStorage;
						} else {
							mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
						}
					}, 300);

					return function stop() {
						clearInterval(interval);
					};
				});
			}
			return mode;
		},
		light: () => {
			mode = 'light';
			localStorage.setItem('theme', mode);
		},
		dark: () => {
			mode = 'dark';
			localStorage.setItem('theme', mode);
		},
		system: () => {
			mode = 'system';
			localStorage.removeItem('theme');
		},
		custom: (value: string) => {
			localStorage.setItem('theme', value);
		}
	};
}

export const modeWatcher = createModeWatcher();
=======
function createModeWatcher() {
    let mode = $state('dark'); // 'light' | 'dark' | 'system'
    let isStorage = $state('');

    return {
        get mode() {
            if ($effect.tracking() && !localStorage.getItem('theme')) {
                $effect(() => {
                    mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    const interval = setInterval(() => {
                        isStorage = window.localStorage.getItem('theme') ?? '';
                        if (isStorage) {
                            mode = isStorage;
                        } else {
                            mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                        }
                    }, 300);

                    return function stop() {
                        clearInterval(interval);
                    };
                });
            }
            return mode;
        },
        light: () => {
            mode = 'light';
            localStorage.setItem('theme', mode);
        },
        dark: () => {
            mode = 'dark';
            localStorage.setItem('theme', mode);
        },
        system: () => {
            mode = 'system';
            localStorage.removeItem('theme');
        },
        custom: (value: string) => {
            mode = 'value';
            localStorage.setItem('theme', mode);
        }
    }
}

export const modeWatcher = createModeWatcher();
>>>>>>> ae358c6b9e391930f9033e860a975441b8e980e4
