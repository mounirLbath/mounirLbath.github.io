# Frobenius Groups

*Mounir Lbath, March 2024* 

## Table of Contents

1. [The Frobenius Theorem](#the-frobenius-theorem)
2. [Representations of a Finite Group](#representations-of-a-finite-group)
3. [Characters](#characters)
4. [Induced Representations](#induced-representations)
5. [Proof of the Frobenius Theorem](#proof-of-the-frobenius-theorem)
6. [Appendix: Useful Prerequisites](#appendix-useful-prerequisites)

---

### Introduction

The theory of representations of finite groups, discovered by Frobenius toward the end of the 19th century, consists in analyzing the properties and structure of a finite group $(G, \cdot)$ by making it act linearly on a vector space. In this post, we use representation theory to prove a theorem about Frobenius groups. In the appendix, we gather some prerequisites that we will use without further mention in this text. This work was originally a TIPE (*Travail d'Initiative Personnelle Encadré*) for the *Ecole Normale Supérieure* and was given the grade 18/20.

---

## The Frobenius Theorem

**Definition 1.**  
Let $(G, \cdot)$ be a finite group with identity $e$ and $H$ a proper subgroup of $G$ (i.e. $H \neq \{e\}$ and $H \neq G$). We say that $G$ is a Frobenius group, that $H$ is a Frobenius complement, and that $(G,H)$ is a Frobenius pair if
$$
\forall\, g\in G\setminus H,\quad gHg^{-1}\cap H=\{e\}.
$$
Note that this is equivalent to
$$
\forall\, (x,y)\in G^2,\quad y^{-1}x\notin H\implies xHx^{-1}\cap yHy^{-1}=\{e\}.
$$
Intuitively, this means that the conjugates of $H$ cover $G$ "as much as possible."

**Proposition 1.**  
If $(G,H)$ is a Frobenius pair, then
$$
\Bigl|\bigcup_{g\in G} gHg^{-1}\Bigr| = |G|+1-\frac{|G|}{|H|}.
$$

**Proof.**  
We have
$$
\Bigl|\bigcup_{g\in G} gHg^{-1}\Bigr| = \Bigl|\{e\}\,\sqcup\,\bigsqcup_{gH\in G/H}\Bigl(gHg^{-1}\setminus\{e\}\Bigr)\Bigr| = 1 + |G/H|(|H|-1). \square
$$
One can show that for any subgroup $H$ the above equality is in fact an inequality $(\leq)$. It also shows that the conjugates of a proper subgroup never cover $G$ (recall that $G$ is finite, otherwise $G=GL_n(\mathbb{C})$ and $H=T_n(\mathbb{C})\cap GL_n(\mathbb{C})$ the group of invertible triangular matrices produce a counter-example).

**Example 1.**  
Let $G$ be a finite group acting transitively on a set $X$ such that for every $g\in G\setminus\{e\}$, $g$ fixes at most one point of $X$. Then, if $\alpha\in X$ is such that $\operatorname{Stab}(\alpha)\neq\{e\}$, the pair $(G,\operatorname{Stab}(\alpha))$ is a Frobenius pair.

**Proof.**  
We have $\operatorname{Stab}(\alpha)\neq G$ (by transitivity). If $g\in G\setminus\operatorname{Stab}(\alpha)$, then $g\cdot\alpha\neq\alpha$; hence $g\cdot\alpha$ and $\alpha$ are simultaneously fixed only by $e$. Therefore, $\operatorname{Stab}(g\cdot\alpha)\cap \operatorname{Stab}(\alpha)=\{e\}$, i.e. $g\,\operatorname{Stab}(\alpha)\,g^{-1}\cap\operatorname{Stab}(\alpha)=\{e\}$ $\square$.

One can in fact show that every Frobenius group is of this form. Here are some examples:

**Example 2.**  
- If $K$ is a finite field and 
  $$
  G=\operatorname{Aff}(1,K)=\{\tau_{a,b}: x\in K\mapsto ax+b,\ (a,b)\in K^*\times K\}
  $$
  is the group of affine bijections of $K$ onto itself, and 
  $$
  H(K)=\{\tau_{a,0}: x\in K\mapsto ax,\ a\in K^*\}
  $$
  (the subgroup of those that fix $0$), then $(G,H)$ is a Frobenius pair. (Note: $\tau_{a,b}$ fixes exactly $b/(1-a)$ for $a\neq1$; fixes no point of $K$ for $a=1$ and $b\neq0$; and fixes all of $K$ for $a=1$ and $b=0$ — i.e. for $\tau_{a,b}=\mathrm{id}$; finally, $H(K)=\operatorname{Stab}(0)$.)
- If $G=A_4$ (the alternating group) and $\gamma$ is a 3-cycle, then $(G,\langle \gamma\rangle)$ is a Frobenius pair.
- If $n\in\mathbb{N}^*$ is odd, $D_n$ is the dihedral group (the group of affine transformations of the plane preserving the regular $n$-gon centered at the origin), and $s$ is an orthogonal symmetry in $D_n$, then $(D_n,\langle s\rangle)$ is a Frobenius pair.

**Theorem 1 (Frobenius).**  
Let $(G,H)$ be a Frobenius pair. Define
$$
N=\Bigl(G\setminus\bigl(\bigcup_{g\in G}gHg^{-1}\bigr)\Bigr)\cup\{e\},
$$
called the **Frobenius kernel**. Then $N$ is a normal subgroup of $G$, and $N\cap H=\{e\}$, and $G=NH$ (we say that $G$ is the semidirect product of $N$ by $H$).

The fact that $N\cap H=\{e\}$ is evident; moreover, by Proposition 1,
$$
|N|=|G|-\Bigl|\bigcup_{g\in G}gHg^{-1}\Bigr|+1=\frac{|G|}{|H|}.
$$
Assuming that $N$ is a subgroup of $G$, the map
$$
\varphi: (n,h)\in N\times H\mapsto nh
$$
is injective (if $nh=n'h'$ then $n'^{-1}n=h'h^{-1}\in N\cap H=\{e\}$, hence $(n,h)=(n',h')$) and, by cardinality, surjective; thus, $G=NH$. Moreover, if $g\in G$, then $gNg^{-1}\subseteq N$ (otherwise an element of $N\setminus\{e\}$ would be conjugate to an element of $H$, contradicting the definition of $N$); hence, $N$ is normal. The difficult part of the theorem lies in proving that $N$ is a subgroup. This will be demonstrated in Section 5.

**Example 3.**  
Revisiting the pairs from Example 2 in the “group action” formulation of Example 1, the Frobenius kernel is the set of elements of $G$ acting without fixed points, to which the identity $e$ is added. Thus:
- The kernel of $(A_4,\langle \gamma\rangle)$ is the Klein group 
  $$
  V=\{\mathrm{id},\,(1\,2)(3\,4),\,(1\,3)(2\,4),\,(1\,4)(2\,3)\}.
  $$
- The kernel of $(\operatorname{Aff}(1,K),H(K))$ is the subgroup 
  $$
  \{\tau_{1,b}:b\in K\}
  $$
  of translations in $\operatorname{Aff}(1,K)$.
- The Frobenius kernel of $D_n$ is the group of rotations centered at the origin by an angle in $\frac{2\pi}{n}\mathbb{Z}$ (naturally isomorphic to $U_n$).

---

## Representations of a Finite Group

To prove the Frobenius theorem, we will try to express $N$ as the kernel of a representation.

**Definition 2.**  
Let $(G,\cdot)$ be a finite group. A **representation** of $G$ is a pair $(\rho,V)$ where $V$ is a finite-dimensional $\mathbb{C}$-vector space and $\rho$ is a homomorphism from $G$ to $\operatorname{GL}(V)$. We will sometimes denote it simply by $\rho$. The **degree** of $\rho$ is the integer $\dim(V)$.

Thus, we view the elements of $G$ as linear transformations on $V$.

**Example 4.**  
- Representations of degree 1 correspond to homomorphisms from $G$ to $\mathbb{C}^*$. In particular, the trivial representation is the one corresponding to the trivial homomorphism from $G$ to $\mathbb{C}^*$.
- A more elaborate example: if $(f_g)_{g\in G}$ is a basis of a vector space $V$ of dimension $|G|$ indexed by $G$, and for each $g\in G$ we define $\rho(g)$ as the unique element of $\operatorname{GL}(V)$ such that
  $$
  \forall\, h\in G,\quad \rho(g)(f_h)=f_{gh},
  $$
  then we have defined a representation of $G$ called the **regular representation**. Moreover, it is said to be **faithful** because $\ker(\rho)=\{e\}$.
- If $(\rho,V)$ and $(\rho',V')$ are two representations of $G$, then by setting, for $g\in G$, one defines a representation on the space $L(V,V')$ (the space of linear maps from $V$ to $V'$) by
  $$
  \forall\, u\in L(V,V'),\quad (\widetilde{\rho,\rho'})(g)(u)=\rho'(g)\circ u\circ \rho(g^{-1}).
  $$
- Let $(\rho,V)$ and $(\rho',V')$ be as above. Then one defines a representation $(\rho\oplus\rho',\,V\oplus V')$ by
  $$
  \forall\,(g,v,v')\in G\times V\times V',\quad (\rho\oplus\rho')(g)((v,v'))=(\rho(g)(v),\,\rho'(g)(v')).
  $$
  This construction also works for direct sum decompositions in which $\rho$ and $\rho'$ are defined: in a basis adapted to this decomposition, the matrices of $(\rho\oplus\rho')(g)$ will consist of two square diagonal blocks of sizes $\dim(V)$ and $\dim(V')$.

**Definition 3.**  
If $(\rho,V)$ and $(\rho',V')$ are two representations of $G$, we say that $\rho$ is **equivalent** to $\rho'$ (and write $\rho\sim\rho'$) if $\dim(V)=\dim(V')$ and if there exist bases $e$ of $V$ and $e'$ of $V'$ such that
$$
\forall\, g\in G,\quad \operatorname{Mat}(\rho(g))=\operatorname{Mat}(\rho'(g)).
$$
In other words, if there exists an isomorphism $u\in L(V,V')$ such that
$$
\forall\, g\in G,\quad u\circ \rho(g)=\rho'(g)\circ u.
$$
Moreover, for any $\rho,\rho'$ we denote
$$
\operatorname{Hom}(\rho,\rho')=\{u\in L(V,V')\mid \forall\, g\in G,\; u\circ \rho(g)=\rho'(g)\circ u\},
$$
which is clearly a subspace of $L(V,V')$.

**Definition 4.**  
A representation $\rho$ of $G$ is said to be **irreducible** if the only subspaces of $V$ that are stable under all $\rho(g)$ for $g\in G$ are $\{0\}$ and $V$.

These representations cannot be “broken” into subrepresentations; this is the case, for example, for representations of degree 1. In fact, we have the following proposition:

**Proposition 2 (Maschke).**  
Let $(\rho,V)$ be a representation of $G$ and $U$ a subspace of $V$ that is stable under all $\rho(g)$ for $g\in G$. Then there exists a supplementary subspace $S$ of $U$ that is also stable under all $\rho(g)$.

**Proof.**  
It suffices to construct a projector with image $U$ that commutes with all $\rho(g)$; its kernel will then be the desired supplementary subspace. Let $p$ be any projector with image $U$. Modify it by averaging over $G$:
$$
q=\frac{1}{|G|}\sum_{g\in G}\rho(g)\circ p\circ \rho(g^{-1}).
$$
This is an endomorphism whose image is contained in $U$ and such that $q|_U=\operatorname{id}_U$ (since the $\rho(g)$ stabilize $U$) and which commutes with all $\rho(g)$ (because $\rho(g)\circ q\circ \rho(g^{-1})=q$, as the map $g\mapsto hg$ is bijective). $\square$

By induction on the dimension of $V$, one shows the following reduction result:

**Proposition 3.**  
If $(\rho,V)$ is a representation, then there exists $k\in\mathbb{N}^*$ and subspaces $V_1,V_2,\dots,V_k$ of $V$ such that
$$
V=\bigoplus_{i=1}^k V_i,
$$
and there exist irreducible representations $(\rho_1,V_1),\dots,(\rho_k,V_k)$ such that
$$
\rho=\rho_1\oplus\rho_2\oplus\cdots\oplus\rho_k.
$$

Finally, here is one last proposition that will prove very useful:

**Proposition 4 (Schur).**  
Let $(\rho,V)$ and $(\rho',V')$ be two irreducible representations of $G$. Then
$\dim\operatorname{Hom}(\rho,\rho')=
\begin{cases}
1 & \text{if } \rho\sim\rho', \\[1mm]
0 & \text{if } \rho\not\sim\rho'.
\end{cases}$

**Proof.**  
- Suppose $\rho\sim\rho'$. Up to transporting $\rho'$ via the isomorphism given by the equivalence, assume $V=V'$ and $\rho=\rho'$. Let $u\in\operatorname{Hom}(\rho,\rho)$. Since $\mathbb{C}$ is algebraically closed, $u$ has an eigenvalue $\lambda$. Then for all $g\in G$, $u$ and $\rho(g)$ commute, hence the eigenspace $E_\lambda(u)=\ker(u-\lambda\,\operatorname{id})$ is stable under $\rho(g)$. By the irreducibility of $\rho$, since $E_\lambda(u)$ is nonzero, it must equal $V$, so that $u=\lambda\,\operatorname{id}$. Conversely, every map of the form $\lambda\,\operatorname{id}$ (with $\lambda\in\mathbb{C}$) belongs to $\operatorname{Hom}(\rho,\rho)$. Hence, $\operatorname{Hom}(\rho,\rho)=\mathbb{C}\,\operatorname{id}$ has dimension 1.
- Suppose $\rho\not\sim\rho'$. Let $u\in\operatorname{Hom}(\rho,\rho')$. For any $g\in G$, we have $\rho'(g)\circ u=u\circ \rho(g)$. Thus, the image $\operatorname{im}(u)$ is stable under $\rho'(g)$. By irreducibility, $\operatorname{im}(u)$ is either $V'$ or $\{0\}$. Similarly, $\ker(u)$ is either $V$ or $\{0\}$. Therefore, if $u$ is not an isomorphism, then $\ker(u)=V$ and $\operatorname{im}(u)=\{0\}$, so that $u=0$. This completes the proof. $\square$

---

## Characters

A large part of the information contained in a representation is actually stored in its character:

**Definition 5.**  
Let $(\rho,V)$ be a representation of $G$. The **character** of $\rho$ is the function
$$
\chi_\rho: G\to\mathbb{C},\quad g\mapsto \operatorname{Tr}(\rho(g)).
$$
A character is any function in $\mathbb{C}^G$ that is the character of some representation. We say that a character is **irreducible** if it comes from an irreducible representation.

**Example 5.**  
- $\chi(e)=\operatorname{Tr}(\operatorname{id})$ is the degree of the representation.
- Two equivalent representations have the same character (i.e. the same matrices in well-chosen bases).
- If $g,h\in G$ and $\chi$ is a character, then
  $$
  \chi(ghg^{-1})=\operatorname{Tr}\bigl(\rho(g)\rho(h)\rho(g)^{-1}\bigr)=\operatorname{Tr}(\rho(h))=\chi(h).
  $$
  We denote by $\operatorname{Cent}(G)$ the subspace of central functions on $G$ (i.e. functions constant on the conjugacy classes of $G$; its dimension is the number of such classes). Then $\chi\in\operatorname{Cent}(G)$.
- Trivially, $\chi_{\rho_1\oplus\rho_2}=\chi_{\rho_1}+\chi_{\rho_2}$.
- For any $g\in G$, since $g^{|G|}=e$, the polynomial
  $$
  X^{|G|}-1=\prod_{\omega\in U_{|G|}}(X-\omega)
  $$
  annihilates $\rho(g)$ and splits with simple roots. Hence, $\rho(g)$ is diagonalizable with spectrum contained in $U_{|G|}$. If $\{\lambda_1,\dots,\lambda_d\}$ is the spectrum of $\rho(g)$, then $\{\lambda_1^{-1},\dots,\lambda_d^{-1}\}$ is the spectrum of
  $$
  \rho(g)^{-1}=\rho(g^{-1}),
  $$
  so that, since the eigenvalues lie in $U_{|G|}$,
  $$
  \chi(g^{-1})=\lambda_1^{-1}+\cdots+\lambda_d^{-1}=\lambda_1+\cdots+\lambda_d=\chi(g).
  $$
- Using the notations of Example 4, one has
  $$
  \chi_{\widetilde{\rho,\rho'}}=\chi_\rho\,\chi_{\rho'},
  $$
  which is a consequence (via the previous point and the definition of $(\widetilde{\rho,\rho'})$) of the fact that for $A,B\in M_n(\mathbb{C})$, the linear map $M\in M_n(\mathbb{C})\mapsto AMB\in M_n(\mathbb{C})$ has trace $\operatorname{Tr}(A)\operatorname{Tr}(B)$.

**Definition/Proposition 1.**  
We endow $\mathbb{C}^G$ with the Hermitian inner product (see Appendix) defined by
$$
\forall\,(u,v)\in\mathbb{C}^G\times\mathbb{C}^G,\quad \langle u,v\rangle=\frac{1}{|G|}\sum_{g\in G} u(g)v(g).
$$
To compute the Hermitian inner product of two characters, we again use the “averaging technique”:

**Lemma 1.**  
Let $\rho$ be a representation. Then
$$
\frac{1}{|G|}\sum_{g\in G}\rho(g)
$$
is a projector onto
$$
V_G:=\bigcap_{g\in G}\ker\Bigl(\rho(g)-\operatorname{id}\Bigr).
$$

**Proof.**  
If $x\in V_G$, then
$$
\frac{1}{|G|}\sum_{g\in G}\rho(g)(x)=\frac{1}{|G|}\sum_{g\in G}x=x\quad (1).
$$
Moreover, if $x\in V$ and 
$$
y=\frac{1}{|G|}\sum_{g\in G}\rho(g)(x),
$$
then for any $h\in G$
$$
\rho(h)(y)=\frac{1}{|G|}\sum_{g\in G}\rho(hg)(x)=y,
$$
(since the map $g\mapsto hg$ is bijective) hence $y\in V_G$ (2).

With (1) and (2), the result follows. $\square$

**Proposition 5.**  
If $(\rho,V)$ and $(\rho',V')$ are two representations of $G$, then
$$
\langle\chi_\rho,\chi_{\rho'}\rangle=\dim\operatorname{Hom}(\rho,\rho').
$$

**Proof.**  
Define $(\widetilde{\rho,\rho'})$ as in Example 4. Apply Lemma 1 to this representation.

On one hand,
$$
\bigcap_{g\in G}\ker\Bigl((\widetilde{\rho,\rho'})(g)-\operatorname{id}_{L(V,V')}\Bigr)=\operatorname{Hom}(\rho,\rho'),
$$
so that
$$
\operatorname{Tr}\Bigl(\frac{1}{|G|}\sum_{g\in G}(\widetilde{\rho,\rho'})(g)\Bigr)=\dim\operatorname{Hom}(\rho,\rho'),
$$
(since for a projector its trace equals its rank). On the other hand, by linearity and Example 5,
$$
\operatorname{Tr}\Bigl(\frac{1}{|G|}\sum_{g\in G}(\widetilde{\rho,\rho'})(g)\Bigr)=\frac{1}{|G|}\sum_{g\in G}\chi_{\widetilde{\rho,\rho'}}(g)
=\frac{1}{|G|}\sum_{g\in G}\chi_\rho(g)\chi_{\rho'}(g)=\langle\chi_\rho,\chi_{\rho'}\rangle.
$$
Combining with Schur’s lemma (Proposition 4) completes the proof. $\square$

**Corollary 1.**  
If $(\rho,V)$ and $(\rho',V')$ are two irreducible representations of $G$, then
$$
\langle\chi_\rho,\chi_{\rho'}\rangle=
\begin{cases}
1 & \text{if } \rho\sim\rho',\\[1mm]
0 & \text{if } \rho\not\sim\rho'.
\end{cases}
$$
Thus, the family of irreducible characters is orthonormal and finite (since $\mathbb{C}^G$ is finite-dimensional). Moreover, two non-equivalent irreducible representations have distinct characters; hence there are as many irreducible representations (up to equivalence) as there are irreducible characters.

Denote by $\rho_1,\dots,\rho_r$ a complete set of irreducible representations and by $\chi_1,\dots,\chi_r$ the associated characters. Combining with Proposition 3, we obtain:

**Corollary 2.**  
If $\rho$ is a representation, then there exist $(n_1,\dots,n_r)\in\mathbb{N}^r$ such that
$$
\rho\sim n_1\rho_1\oplus\cdots\oplus n_r\rho_r\quad (\text{where } n_i\rho_i \text{ denotes } \rho_i\oplus\cdots\oplus\rho_i \text{ ($n_i$ times)}).
$$
Then the character of $\rho$ is given by
$$
\chi=\sum_{i=1}^r n_i\chi_i.
$$

**Proposition 6.**  
If $\rho$ and $\rho'$ are two representations, then
$$
\rho\sim\rho'\iff\chi_\rho=\chi_{\rho'}.
$$

**Proof.**  
The direct implication is clear. Suppose $\chi_\rho=\chi_{\rho'}=: \chi$. Write
$$
\rho\sim n_1\rho_1\oplus\cdots\oplus n_r\rho_r\quad \text{and}\quad \rho'\sim n'_1\rho_1\oplus\cdots\oplus n'_r\rho_r.
$$
By orthonormality, $\langle\chi_i,\chi_\rho\rangle=n_i$ and similarly $\langle\chi_i,\chi_{\rho'}\rangle=n'_i$. Thus, $n_i=n'_i$ for each $i$, and so $\rho\sim\rho'$. $\square$

One can in fact show a stronger result than the orthonormality of characters (we will not prove it here):

**Proposition 7.**  
The irreducible characters $\chi_1,\dots,\chi_r$ form an orthonormal basis of $\operatorname{Cent}(G)$. Thus, $r$ is the number of conjugacy classes in $G$ and if $f\in\operatorname{Cent}(G)$,
$$
f=\sum_{i=1}^r\langle\chi_i,f\rangle\chi_i.
$$

---

## Induced Representations

Let $H$ be a subgroup of $G$. Starting from a representation $(\rho,V)$ of $G$, one can easily obtain the representation $(\rho|_H,V)$ of $H$, denoted $\rho|_H$. Conversely, the purpose of this section is to give a natural way to extend a representation $(\rho_0,W)$ of $H$ to a representation $(\rho,V)$ of $G$ (with $W\subseteq V$). Denote
$$
G=\bigsqcup_{i=1}^l g_iH,
$$
the partition of $G$ into left cosets modulo $H$ (with $g_1H=H$).

**Definition 6.**  
Let $(\rho,V)$ be a representation of $G$ and let $W$ be a subspace of $V$ that is stable under $\rho(h)$ for all $h\in H$. Let $\rho_0=\rho|_{H,W}$ be the restriction of $\rho$ to $H$ and the subspace $W$. We say that $\rho$ is **induced** from $\rho_0$ and write
$$
\rho=\operatorname{Ind}^G_H(\rho_0)
$$
if
$$
V=\bigoplus_{i=1}^l \rho(g_i)(W).\tag{*}
$$
Note that under the assumptions of Definition 6, if $g\in G$ can be written as $g=g_i h$ with $h\in H$, then
$$
\rho(g)(W)=\rho(g_i h)(W)=\rho(g_i)\circ \rho(h)(W)=\rho(g_i)(W).
$$
Thus, the subspaces $\rho(g_i)(W)$ do not depend on the choice of representatives of the left cosets modulo $H$. We have the following proposition:

**Proposition 8.**  
If $\rho'$ is a representation of $H$, there exists (up to equivalence) a unique representation $\rho$ of $G$ such that
$$
\rho=\operatorname{Ind}^G_H(\rho').
$$
We do not prove this (although the proof is quite strait-forward once you read the following): let's just observe that if $(\rho_0,W)$ and the action of the $\rho(g_i)$ on $W$ are fixed, then the induced representation is uniquely determined. Indeed, it is enough that it be so on the subspaces $\rho(g_i)(W)$ (by direct sum) and if $g\in G$, $1\le i\le l$, $w\in W$, one has
$$
\rho(g)(\rho(g_i)(w))=\rho(g_j)(\rho_0(h)(w))
$$
where $g\,g_i=g_jh$ (we take the representative of the class of $g\,g_i$ modulo $H$).

**Proposition 9.**  
Let $(\rho,V)$ and $(\rho',V')$ be two representations of $G$ and let $(\rho_0,W)$ be a representation of $H$. Suppose that $\rho=\operatorname{Ind}^G_H(\rho_0)$ (in particular, $\rho_0=\rho|_{H,W}$). Then
$$
\operatorname{Hom}(\rho,\rho')\simeq \operatorname{Hom}(\rho_0,\rho'|_H).
$$

**Proof.**  
The map
$$
u\in\operatorname{Hom}(\rho,\rho')\subset L(V,V')\longmapsto u|_W\in \operatorname{Hom}(\rho_0,\rho'|_H)\subset L(W,V')
$$
is linear. For bijectivity, one shows that any element $v\in \operatorname{Hom}(\rho_0,\rho'|_H)$ extends uniquely to an element $u\in\operatorname{Hom}(\rho,\rho')$ on $V$ via the direct sum decomposition (*). $\square$

Translating Proposition 9 into an equality of dimensions (using Proposition 5), we have:

**Corollary 3.**  
Using the notations of Proposition 9 and denoting $\operatorname{Ind}^G_H(\chi_{\rho_0})=\chi_\rho$, and letting $\langle\,\cdot\,,\cdot\,\rangle_G$ (resp. $\langle\,\cdot\,,\cdot\,\rangle_H$) be the canonical inner product on $\operatorname{Cent}(G)$ (resp. $\operatorname{Cent}(H)$), we have
$$
\langle\operatorname{Ind}^G_H(\chi_{\rho_0}),\chi_{\rho'}\rangle_G=\langle\chi_{\rho_0},\chi'_{\rho}|_H\rangle_H.
$$
Thus, by Proposition 6, one may speak of the "induced character" of $\chi_{\rho_0}$ for $\operatorname{Ind}^G_H(\chi_{\rho_0})$.

**Proposition 10.**  
If $\chi$ is a character of $H$, then for every $g\in G$,
$$
\operatorname{Ind}^G_H(\chi)(g)=\frac{1}{|H|}\sum_{\substack{k\in G\\kgk^{-1}\in H}} \chi(kgk^{-1}).
$$

**Proof.**  
Let $(\rho,V)$ and $(\rho',W)$ be such that $\chi=\chi_{\rho'}$ and $\rho=\operatorname{Ind}^G_H(\rho')$. For $g\in G$, $\rho(g)$ permutes the subspaces $\rho(g_i)(W)$. In a basis adapted to the decomposition
$$
V=\bigoplus_{i=1}^l \rho(g_i)(W),
$$
to compute the trace of $\rho(g)$ it suffices to consider those indices $i$ such that
$$
\rho(g)(\rho(g_i)(W))=\rho(g_i)(W),
$$
i.e. such that $g_i^{-1}gg_i\in H$. Thus, by the invariance of trace under change of basis (transporting $\rho(g_i)(W)$ to $W$ via the isomorphism $\rho(g_i)$),
$$
\chi(g)=\sum_{\substack{1\le i\le l\\ g_i^{-1}gg_i\in H}} \operatorname{Tr}(\rho(g)|_{\rho(g_i)(W)})
=\sum_{\substack{1\le i\le l\\ g_i^{-1}gg_i\in H}} \operatorname{Tr}(\rho(g_i)^{-1}gg_i|_W)
=\sum_{\substack{1\le i\le l\\ g_i^{-1}gg_i\in H}} \chi(g_i^{-1}gg_i).
$$
Since $\chi$ is central on $H$ and each right coset of $H$ has cardinality $|H|$, the result follows. $\square$

This formula allows us to define $\operatorname{Ind}^G_H(f)$ for any central function $f$ (replacing $\chi$ by $f$ in the formula). As the characters linearly generate the central functions, we deduce from Corollary 3:

**Proposition 11.**  
If $f_1\in\operatorname{Cent}(H)$ and $f_2\in\operatorname{Cent}(G)$, then
$$
\langle \operatorname{Ind}^G_H(f_1), f_2\rangle_G=\langle f_1, f_2|_H\rangle_H.
$$

---

## Proof of the Frobenius Theorem

Now we present the proof of Theorem 1. Fix a Frobenius pair $(G,H)$. Let $N$ be the corresponding Frobenius kernel. The central result in the proof is the following proposition:

**Proposition 12.**  
Let $\chi$ be an irreducible character of $H$. There exists an irreducible character $\widetilde{\chi}$ of $G$ such that $\widetilde{\chi}|_H=\chi$ and $\widetilde{\chi}$ is constant on $N$.

**Remark 1.**  
It is easy to see that any central function on $H$ extends in a unique way to a central function on $G$ which is constant on $N$. What matters here is that this extension is a (irreducible) character.

Here is a lemma that will allow us to produce characters constant on $N$:

**Lemma 2.**  
Let $f\in\operatorname{Cent}(H)$ such that $f(e)=0$ and let $\widetilde{f}=\operatorname{Ind}^G_H(f)$. Then $\widetilde{f}|_H=f$ and $\widetilde{f}|_N=0$.

**Proof.**  
It is immediate from the definition of the induced function that $\widetilde{f}(e)=0=f(e)$.  
Let $g\in H\setminus\{e\}$. Note that if $k\in G$ then $kgk^{-1}\in H$ if and only if $g\in k^{-1}Hk\cap H$. By the definition of a Frobenius complement, $k\in H$. Hence,
$$
\widetilde{f}(g)=\frac{1}{|H|}\sum_{\substack{k\in G\\kgk^{-1}\in H}} f(kgk^{-1})
=\frac{1}{|H|}\sum_{k\in H} f(kgk^{-1})
=\frac{1}{|H|}\cdot|H|\cdot f(g)=f(g).
$$
Now, let $g\in N\setminus\{e\}$. For any $k\in G$, $kgk^{-1}\notin H$ (otherwise $g\in k^{-1}Hk$, contradicting the definition of $N$). Thus, $f(kgk^{-1})=0$ and so $\widetilde{f}(g)=0$. $\square$

**Proof of Proposition 12.**  
Let $d=\chi(e)$ be the degree of $\chi$, $l=|G|/|H|\in\mathbb{N}$, $\theta_H$ the trivial character of $H$ and $\theta_G$ the trivial character of $G$. If $\chi$ is the trivial character, simply take $\widetilde{\chi}$ as the trivial character of $G$, which is irreducible.

Otherwise, to apply Lemma 2, consider $\chi-d\cdot \theta_H\in\operatorname{Cent}(H)$ which vanishes at $e$.

Then, set
$$
\widetilde{\psi}:=\operatorname{Ind}^G_H(\chi-d\cdot\theta_H).
$$
By Lemma 2, $\widetilde{\psi}$ vanishes on $N$ and restricts to $\chi-d\cdot\theta_H$ on $H$ (denoted by $(*)$). However, $\widetilde{\psi}$ is not a character (since $\widetilde{\psi}(e)=0$). In order to obtain an irreducible character, we need a central function of Hermitian norm 1. Compute, using Proposition 11,
$$
\langle\widetilde{\psi},\widetilde{\psi}\rangle_G=\langle \operatorname{Ind}^G_H(\chi-d\cdot\theta_H),\widetilde{\psi}\rangle_G
=\langle\chi-d\cdot\theta_H,\widetilde{\psi}|_H\rangle_H
=\langle\chi-d\cdot\theta_H,\chi-d\cdot\theta_H\rangle_H=1+d^2,
$$
(using the orthonormality of irreducible characters and the fact that $\chi\neq\theta_H$). Also, by Proposition 11,
$$
\langle\widetilde{\psi},\theta_G\rangle_G=\langle \operatorname{Ind}^G_H(\chi-d\cdot\theta_H),\theta_G\rangle_G
=\langle\chi-d\cdot\theta_H,\theta_G|_H\rangle_H=\langle\chi-d\cdot\theta_H,\theta_H\rangle_H=-d.
$$
Thus, we set
$$
\widetilde{\chi}=\widetilde{\psi}+d\cdot\theta_G.
$$
Then, using the inner products in $\operatorname{Cent}(G)$,
$$
\langle\widetilde{\chi},\widetilde{\chi}\rangle=\langle\widetilde{\psi},\widetilde{\psi}\rangle+2d\langle\widetilde{\psi},\theta_G\rangle+d^2\langle\theta_G,\theta_G\rangle
= 1+d^2-2d^2+d^2=1.
$$
Moreover, $\widetilde{\chi}$ is clearly a $\mathbb{Z}$-linear combination of characters. Hence, there exist integers $n_1,\dots,n_r$ such that
$$
\widetilde{\chi}=\sum_{i=1}^r n_i\chi_i.
$$
Then
$$
1=\langle\widetilde{\chi},\widetilde{\chi}\rangle=n_1^2+\cdots+n_r^2,
$$
so that, as the $n_i$ are integers, only one of them is nonzero and equals $\pm1$. Since $\widetilde{\chi}(e)=d>0$, that nonzero $n_i$ equals 1 and $\widetilde{\chi}$ is an irreducible character.

Finally, $\widetilde{\chi}$ remains constant on $N$ (because we added $d\cdot\theta_G$ to $\widetilde{\psi}$, which was constant on $N$), and for $h\in H$,
$$
\widetilde{\chi}(h)=\widetilde{\psi}(h)+d\cdot\theta_G(h)
=(\chi-d\cdot\theta_H)(h)+d
=\chi(h).
$$
Thus, $\widetilde{\chi}|_H=\chi$, which completes the proof. $\square$

**Remark 2.**  
We actually know all the values taken by $\widetilde{\chi}$. Indeed, one has
$$
G=N\cup \Bigl(\bigcup_{g\in G}gHg^{-1}\Bigr),
$$
and no element of $N$ is conjugate to an element of $\bigcup_{g\in G}gHg^{-1}\setminus\{e\}$ (otherwise it would be conjugate to an element of $H\setminus\{e\}$). Moreover, every element of $\bigcup_{g\in G}gHg^{-1}\setminus\{e\}$ is conjugate to an element of $H$. If we denote by $A_1,\dots,A_m$ the conjugacy classes in $G$ of the elements of $\bigcup_{g\in G}gHg^{-1}\setminus\{e\}$, then
$$
\bigcup_{g\in G}gHg^{-1}\setminus\{e\}=\bigsqcup_{i=1}^m A_i,
$$
and we choose $h_1\in A_1\cap H,\dots, h_m\in A_m\cap H$. Then, since characters are central, one obtains the following table:

|                     | $e$         | $A_1$            | $\dots$ | $A_m$           | $N\setminus\{e\}$ |
|---------------------|---------------|--------------------|----------|-------------------|---------------------|
| $\widetilde{\psi}$ | $0$         | $\chi(h_1)-d$     | $\dots$ | $\chi(h_m)-d$     | $0$               |
| $\theta_G$         | $1$         | $1$              | $\dots$ | $1$             | $1$               |
| $\widetilde{\chi}=\widetilde{\psi}+d\theta_G$ | $d$         | $\chi(h_1)$       | $\dots$ | $\chi(h_m)$       | $d$               |

(with $d=\chi(e)=\widetilde{\chi}(e)$).

The decomposition of a character into irreducible characters yields the following corollary:

**Corollary 4.**  
Let $\chi$ be a character of $H$. There exists a character $\widetilde{\chi}$ of $G$ such that $\widetilde{\chi}|_H=\chi$ and $\widetilde{\chi}$ is constant on $N$. The table above remains valid.

One last lemma will allow us to conclude.

**Lemma 3.**  
Let $\chi$ be a character of $G$ coming from a representation $\rho$. Then
$$
\chi(g)=\chi(e)\quad\text{if and only if}\quad g\in\ker(\rho).
$$

**Proof.**  
Let $d=\chi(e)$ be the degree of $\rho$. For $g\in G$, as seen in Example 5, $\rho(g)$ is diagonalizable with spectrum $\{\lambda_1,\dots,\lambda_d\}$ in $U$. Then by the triangle inequality,
$$
|\chi(g)|=|\lambda_1+\cdots+\lambda_d|\le|\lambda_1|+\cdots+|\lambda_d|=d=\chi(e),
$$
with equality if and only if $\lambda_1,\dots,\lambda_d$ are positively collinear, i.e. if they are all equal (since they are of modulus 1). Therefore, $\chi(g)=\chi(e)$ if and only if $\lambda_1=\cdots=\lambda_d=1$, that is, if and only if $\rho(g)=\operatorname{id}$. $\square$

At this point, all the ingredients are in place to conclude.

**Conclusion of the Proof of Theorem 1.**  
Take $\rho$ a faithful representation of $H$ (for example, the regular representation) and $\chi$ its character. Let $\widetilde{\chi}$ be as in Corollary 4 and $\widetilde{\rho}$ the associated representation. We now show that
$$
N=\ker(\widetilde{\rho}).
$$
From the table in Remark 2 and Lemma 3, we have
$$
\ker(\widetilde{\rho})=\{x\in G\mid \widetilde{\chi}(x)=\widetilde{\chi}(e)\}=N,
$$
(where the last equality uses the fact that for the chosen $h_1,\dots,h_m$ we have $\chi(h_i)\neq\chi(e)$ by Lemma 3 and the faithfulness of $\rho$).

Thus, $N$ is indeed a (normal) subgroup of $G$, which completes the proof. 

$$\huge\square$$

---

## Appendix: Useful Prerequisites

In this section, let $(G,\cdot)$ be a finite group.

**Definition A.**  
Let $X$ be a set. An **action** of the group $G$ on $X$ is any homomorphism $\varphi$ from $G$ to $S(X)$. We denote
$$
g\cdot x:=\varphi(g)(x) \quad\text{for } (g,x)\in G\times X.
$$
If $x\in X$, the **stabilizer** of $x$ is the set
$$
\operatorname{Stab}(x)=\{g\in G\mid g\cdot x=x\}.
$$
It is straightforward to verify that this is a subgroup of $G$. The action is said to be **faithful** if $\varphi$ is injective, and **transitive** if for all $x\in X$,
$$
\{g\cdot x,\;g\in G\}=X.
$$

**Proposition A.**  
Suppose that $G$ acts on $X$. Then for any $g\in G$ and $x\in X$,
$$
\operatorname{Stab}(g\cdot x)=g\,\operatorname{Stab}(x)\,g^{-1}.
$$ 

**Proof.**  
If $h\in \operatorname{Stab}(g\cdot x)$, then
$$
h\cdot (g\cdot x)=g\cdot x\quad\Longleftrightarrow\quad (g^{-1}hg)\cdot x=x\quad\Longleftrightarrow\quad g^{-1}hg\in \operatorname{Stab}(x),
$$
i.e. $h\in g\,\operatorname{Stab}(x)\,g^{-1}$. $\square$

**Definition B.**  
Let $(G,\cdot)$ be a group.
- For $g\in G$, the map
  $$
  \varphi_g: x\in G\mapsto gxg^{-1}\in G
  $$
  is an automorphism of the group, called the **conjugation automorphism**; and the map $g\mapsto \varphi_g\in\operatorname{Aut}(G)$ defines an action of $G$ on itself.
- Two elements $x,y\in G$ are said to be **conjugate** if there exists $g\in G$ such that $x=\varphi_g(y)$. This defines an equivalence relation on $G$ whose equivalence classes are called **conjugacy classes**. Similarly, one defines the conjugates of a subset of $G$. If $H$ is a subgroup of $G$, then for every $g\in G$, $\varphi_g(H)$ is a subgroup of $G$ (being the image of a subgroup by a homomorphism) of cardinality $|H|$ (since $\varphi_g$ is injective).

**Definition C.**  
Let $H$ be a subgroup of $G$. We say that $H$ is **normal** if
$$
\forall\, g\in G,\;\forall\, h\in H,\quad ghg^{-1}\in H.
$$

**Definition D.**  
Let $H$ be a subgroup of $G$. Two elements $x,y\in G$ are said to be **congruent modulo $H$** if $y^{-1}x\in H$. This defines an equivalence relation on $G$ whose equivalence classes (the left cosets) are the sets
$$
gH,\quad g\in G.
$$
We denote
$$
G/H=\{gH\mid g\in G\}.
$$
Since for any $g\in G$ the map $\tau_g: h\mapsto gh$ is injective, every coset has cardinality $|H|$ and since their union is $G$,
$$
|G/H|=\frac{|G|}{|H|},
$$
which in particular shows that $|H|$ divides $|G|$ (this is Lagrange's Theorem).

Finally, we define the notion of a **Hermitian space**, which generalizes that of a Euclidean space:

**Definition E.**  
Let $V$ be a $\mathbb{C}$-vector space. A **Hermitian inner product** on $V$ is a function
$$
\langle\,\cdot\,,\,\cdot\,\rangle: V\times V\to\mathbb{C},
$$
which is linear in the second variable (i.e. for all $x,y,z\in V$ and $\lambda\in\mathbb{C}$, $\langle x,y+\lambda z\rangle=\langle x,y\rangle+\lambda\langle x,z\rangle$), Hermitian symmetric (i.e. $\langle x,y\rangle=\overline{\langle y,x\rangle}$), positive (i.e. $\langle x,x\rangle\in\mathbb{R}_+$ for all $x\in V$), and definite (i.e. $\langle x,x\rangle=0$ if and only if $x=0$). As in the Euclidean case, one defines the notion of orthogonality and orthonormal families.

Here is the **translated bibliography** from the French PDF document, formatted in clean **Markdown**:

---

## 📚 Bibliography

1. **Gaëtan Chenevier**  
   *Algebra I Course (Chapter 7, Linear Representations of Finite Groups)*

2. **William Fulton and Joe Harris**  
   *Representation Theory: A First Course*.  
   Springer, 2004.

3. **Gérard Rauch**  
   *Finite Groups and Their Representations*.  
   Ellipses, 2000.  
   ISBN: 978-2-7298-0180-9

4. **Jean-Pierre Serre**  
   *Finite Groups: An Introduction*.  
   International Press, 2016.  
   ISBN: 978-1-57146-327-2

---
