import react from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

function login() {
	const { data: session } = useSession();
	if (session) {
		return <div> `Bonjour, ${session.user.name}`</div>;
	} else {
		return (
			<div>
				<p>Bonjour, Identifiez vous car vous n'êtes pas connecté</p>
				<button>Sign In</button>
			</div>
		);
	}
}
export default login;
