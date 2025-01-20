export default function trackFocus(
	node: Node,
	options: { onfocusin?: () => void; onfocusout?: () => void }
) {
	$effect(() => {
		// Moving focus laterally within a trackFocus instance should not cause the focus to be changed, so ignore a focusout followed by a focusin on the same tick.
		let timer: number | undefined;

		function focusin() {
			clearTimeout(timer);
			options.onfocusin?.();
		}

		function focusout() {
			timer = setTimeout(() => {
				options.onfocusout?.();
			}, 1);
		}

		node.addEventListener('focusin', focusin);
		node.addEventListener('focusout', focusout);

		return () => {
			node.removeEventListener('focusin', focusin);
			node.removeEventListener('focusout', focusout);
		};
	});
}
