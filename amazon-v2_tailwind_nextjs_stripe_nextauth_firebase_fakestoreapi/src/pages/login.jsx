import react from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

function login() {
	const { data: session } = useSession();
	console.log(session);

	if (session) {
		return (
			<div>
				<p>`Bonjour, ${session.user.name}`</p>
				<button onClick={() => signOut()}>Sign Out</button>
			</div>
		);
	} else {
		return (
			<div>
				<p>Bonjour, Identifiez vous car vous n'êtes pas connecté</p>
				<button onClick={() => signIn()}>Sign In</button>
			</div>
		);
	}
}
export default login;
